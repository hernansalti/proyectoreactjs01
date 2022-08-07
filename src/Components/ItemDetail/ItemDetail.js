import Counter from '../Counter/Counter'

const handleOnAdd = (quantity) => {
    console.log(`la cantidad agregada es: ${quantity}`)
    
  }
  
const ItemDetail = ({ name , price , description }) => {
    return (

        <>
        <h1>{name}</h1>
        <h2>{description}</h2>
        <h2>$ {price}</h2>
        <div>
            <Counter stock={10} onAdd={handleOnAdd}/>
        </div>
        </>
    )
    
    
}


export default ItemDetail