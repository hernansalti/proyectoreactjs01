// import './ItemListContainer.css'
// import { useState, useEffect } from 'react'
// import { getProductosNonno, getProductsByCategory} from '../../asyncMock'
// import { useParams } from 'react-router-dom'

// import ItemList from '../ItemList/ItemList'

// const ItemListContainer = ({ greeting }) => {
//     const [products, setProducts] = useState([])

//     const { categoryId } = useParams()

//     useEffect(() => {
//         const asyncFunction = categoryId ? getProductsByCategory : getProductosNonno
//         asyncFunction(categoryId).then(products => {
//             setProducts(products)
//         }).catch(error => {
//             console.log(error)
//         })
     
//     }, [categoryId])

//     return (
//         <>
//             <h1>{greeting}</h1>
//             <ItemList products={products}/>
//         </>
//     )
// }

// export default ItemListContainer

import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProductosNonno, getProductsByCategory } from "../../asyncMock"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom' 

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        const onResize = (e) => {
            console.log(e)
            console.log('cambio tamaño de ventana')
        }
        window.addEventListener('resize', onResize)

        
        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [])


    useEffect(() => {
        setLoading(true)
        const asyncFunction = categoryId ? getProductsByCategory : getProductosNonno
        
        asyncFunction(categoryId).then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })  
    }, [categoryId])


    if(loading) {
        return <h1>Cargando productos...</h1>
    }

    if(products.length === 0) {
        return categoryId ? <h1>No hay productos en nuestra categoria {categoryId}</h1> : <h1>No hay productos disponibles </h1>
    }

    return (
        <div onClick={() => console.log('click en itemlistcontainer')}>
            <h1>{`${greeting} ${categoryId || ''}`}</h1>
          
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer