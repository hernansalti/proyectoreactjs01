import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProductsNonno } from '../../asyncMock'

import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProductsNonno().then(products => {
            setProducts(products)
        })
    }, [])
    // ***hasta aca quede ver como separar los contadores por separado y ver como hay que entregar***
    // const productsComp = products.map(prod => <li key={prod.id}>{prod.name}</li>)
    return (
        <>
            <h1>{greeting}</h1>
            {/* <ul> */}
                {/* {productsComp} */}
                {/* {products.map(prod => <li key={prod.id}>{prod.name}</li>)}
            </ul>         */}
            <ItemList products={products}/>
        </>

    )
}
/*/const ItemListContainer = ({greeting}) => {
    return (
        <h1 class='titulo' >{greeting}</h1>
    )
}*/

export default ItemListContainer