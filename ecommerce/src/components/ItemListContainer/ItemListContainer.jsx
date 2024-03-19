import { useState,useEffect } from "react" 
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getProducts ,getProductsByCategory } from "../../asyncMock"

const ItemListContainer = ({ greeting }) => {
const [products, setProducts] = useState([])

const { categoryId } = useParams()

useEffect(() => {
    const asyncFunction = categoryId ? getProductsByCategory : getProducts
    asyncFunction(categoryId)
    .then(result => {
        setProducts(result)
    })
    .catch(error => {
        console.log(error);
    })
}, [categoryId])

    return(
<div>
    <h1>{greeting}</h1>
    <ItemList products={products}/>
</div>
        
    )
}
export default ItemListContainer