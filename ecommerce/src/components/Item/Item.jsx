import { Link } from "react-router-dom"

const Item = ( { id, name, img, price, stock, category} ) => {
    return (
        <article>
         <header>
            <h2>
                {name}
            </h2>
         </header>
         <picture>
            <img src={img} style={{width: 100}} alt={name} className="ItemImg"/>
         </picture>
         <section>
            <p className="Info">
            Categoria: {category}
            </p>
            <p className="Info">
                Precio: ${price}
            </p>
            <p className="Info">
                Stock disponible: {stock}
            </p>
         </section>
         <footer className="Itemfooter">
            <Link to={ `/item/${id}`} className='Option'>Ver detalle</Link>

         </footer>
        </article>
    )
}
export default Item