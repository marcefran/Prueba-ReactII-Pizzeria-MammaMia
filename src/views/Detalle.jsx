import { useEffect, useState } from "react";
import { usePizzaContext } from "../context/PizzaContext";
import { useParams } from "react-router-dom";
import { GiFullPizza} from "react-icons/gi";
import { HiOutlineShoppingCart } from "react-icons/hi";

const Detalle = () => {
  const { id } = useParams();
  const { pizzas, formatearPrecio, añadirAlCarrito } = usePizzaContext();
  const [pizza, setPizza] = useState(pizzas.find((item) => item.id === id));

  const { name, desc, img, price, ingredients } = pizza;

  useEffect(() => {
    document.title = `Pizza ${
      name[0].toUpperCase() + name.slice(1)
    } - Mamma Mía! Pizzería`;
  }, []);

  return (
    <main>
      <section className="card details-layout">
        <div className="details-img">
          <img src={img} alt={name} />
        </div>

        <div className="details-body">
          <h1 className="card-title">{name}</h1>
          <p>{desc}</p>

          <div>
            <h2>Ingredientes:</h2>
            <ul className="ingredient-list">
              {ingredients.map((item, index) => (
                <li key={index} className="list-item">
                  <GiFullPizza color="#e11d48" aria-hidden="true" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="details-footer">
            <h3>Precio: {formatearPrecio(price)}</h3>
            <button onClick={() => añadirAlCarrito(pizza)} className="btn">
              <HiOutlineShoppingCart aria-hidden="true" /> Agregar al carrito
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Detalle;
