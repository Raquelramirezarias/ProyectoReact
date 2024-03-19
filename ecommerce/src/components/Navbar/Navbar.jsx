import CartWidget from "../CartWidget/CartWidget";
import {Link, useNavigate} from "react-router-dom"
const Navbar = () => {
const navigate= useNavigate()
    return (
        <header>
<nav style={{backgroundColor:"beige",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
    <Link to='/'>
    <h3 onClick={() => navigate('/')} style={{color:"black",display:"flex",fontSize:15, textAlign:"center"}}>Original-Sneaker</h3>
    </Link>
    
    <div style={{color:"black",display:"flex",fontSize:18,textAlign:"center"}}>
   <Link to={`/category/nike`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}></Link>
   <Link to={`/category/jordan`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}></Link>
   <Link to={`/category/newbalance`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}> </Link>
    </div>
    <CartWidget/>
</nav>
</header>
    
        )
}


export default Navbar