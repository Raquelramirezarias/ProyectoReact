import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {

    return (
<nav>
    <h3>Mi Tienda</h3>
    <div>
        <button>Nike</button>
        <button>Adidas</button>
        <button>Puma</button>
        <button>Jordan</button>
    </div>
    <CartWidget/>
</nav>
    
        )
}


export default Navbar;