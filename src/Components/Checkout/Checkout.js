import { useState, useContext } from "react"
import CartContext from "../../context/CartContext"

import { db } from "../../services/firebase"
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from "firebase/firestore"
import { useNavigate } from 'react-router-dom'





const Checkout = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [orderCreated, setOrderCreated] = useState(false)
    const { cart, getQuantity, getTotal, clearCart } = useContext(CartContext)

    const navigate = useNavigate()

    const totalQuantity = getQuantity()
    const total = getTotal()

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');

    const createOrder = async () => {
        setIsLoading(true)
        try {
            const objOrder = {
                buyer: {
                    nombre: nombre,
                    apellido: apellido,
                    correo: email

                },
                items: cart,
                totalQuantity,
                total,
                date: new Date()
            }

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, 'products')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = productsAddedFromFirestore

            const outOfStock = []

            const batch = writeBatch(db)

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)

                console.log(`El id de su orden es: ${orderAdded.id}`)
                clearCart()
                setOrderCreated(true)
                setTimeout(() => {
                    navigate('/')
                }, 5000)
            } else {
                console.log('Hay productos que no tenemos en stock')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    if(isLoading) {
        return <h1>Un momento por favor...</h1>
    }

    if(orderCreated) {
        return <h1>Gracias por comprar en Tienda Nonno! Chequea tu mail para saber los pasos a seguir</h1>
    }

    const handleChangeNombre = (e) =>{
        setNombre(e.target.value);
        console.log(e.target.value)
     }

     const handleChangeApellido = (e) =>{
         setApellido(e.target.value);
         console.log(e.target.value)
      }

      const handleChangeEmail = (e) =>{
         setEmail(e.target.value);
         console.log(e.target.value)
      }

    return (
            <>
            <h1>Completá tus datos para confirmar la compra</h1>
            <input type="text" name="nombre" placeholder="Nombre" value={nombre} onChange={handleChangeNombre} />
            <input type="text" name="apellido" placeholder="Apellido" value={apellido} onChange={handleChangeApellido} />
            <input type="text" name="correo" placeholder="Correo" value={email} onChange={handleChangeEmail}/>
            <button className="Option" onClick={createOrder}>Confirmar compra</button>
            </>
    )

}

export default Checkout