import { useState } from 'react' 

const ItemCount = ({initial = 1, stock, onAdd})=> {
   const[quantity, setQuantity] = useState(initial)

   const increment = () => {
    if(quantity > stock) {
        setQuantity(prev => prev + 1)
    }
   }
   const decrement = () => {
    if(quantity > 0) {
        setQuantity(prev => prev - 1)
    }
   }

   return(
    <div className='Counter'>
        <div className='Controls'>
        <h4 className='Number'>{quantity}</h4>
            <button className="Button" onClick={decrement}>-</button>
            <button className="Button" onClick={increment}>+</button>
            <button className='Button' onClick={() => onAdd (quantity)} disabled={!stock} >Agregar al carrito</button>
        </div>
    </div>
   )
}
export default ItemCount