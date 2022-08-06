import './Item.css'
const Item = ({product}) => {
    return (
        <li>
            <div  >
                <h3>{product.name}</h3>
                <img class="img" src={product.img} alt={product.name}/>
                <h3>$ {product.price}</h3>
            </div>
        </li>
    )
}

export default Item