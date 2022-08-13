// import { useState, useEffect} from 'react'
// import { getProductById } from '../../asyncMock'
// import ItemDetail from '../ItemDetail/ItemDetail'
// import { useParams } from 'react-router-dom'

// const ItemDetailContainer = () => {
//     const [product, setProduct] = useState()

//     const { productId } = useParams()

//     useEffect(() => {
//         getProductById(productId)
//             .then(product => {
//                 setProduct(product)
//             })
//             .catch(error => {
//                 console.log(error)
//             })
//     }, [productId])

//     return (
//         <div>
//             <h1>Detalle</h1>
//             <ItemDetail {...product}/>
//         </div>
//     )
// }

// export default ItemDetailContainer

// import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {
        getProductById(productId).then(response => {
            setProduct(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])

    if(loading) {
        return <h1>Cargando...</h1>
    }

    return(
        <div className='ItemDetailContainer' >
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer