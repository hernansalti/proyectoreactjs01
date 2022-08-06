
import { getProductsNonno } from '../../asyncMock'
import { useState, useEffect } from 'react'

// import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProductsNonno().then(products => {
            setProducts(products)
        })
    }, [])
    return (
        <div>
            <h1>{greeting}</h1>
            {/* <ItemList products={products}/> */}
            {products.map(prod => <p key={prod.id}>{prod.name}</p>)}
        </div>

    )
}

export default ItemListContainer