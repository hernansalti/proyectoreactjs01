import './Item.css'
const Item = ({product}) => {
    return (
        <li>
            <div  >
                <h3>{product.name}</h3>
                <img class="img" src={product.img} alt={product.name}/>
                <h3>$ {product.price}</h3>
                <button>Ver detalle de producto</button>
            </div>
        </li>
    )
}

export default Item