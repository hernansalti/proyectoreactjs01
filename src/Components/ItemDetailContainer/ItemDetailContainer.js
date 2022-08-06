import { useState, useEffect } from 'react'
import { getProductById } from "../../asyncMock"

const ItemDetailContainer = () => {
    const [product, setProducts] = useState()

    useEffect(() => {
        getProductById('1').then(response => {
            setProducts(response)

        })
    }, []) 

    return(
        <div>
        <h1>Detalle</h1>
        <h2>{product?.name}</h2>
        </div>
    )
}

export default ItemDetailContainer