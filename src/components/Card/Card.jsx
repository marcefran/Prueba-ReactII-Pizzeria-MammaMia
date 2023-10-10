import { useNavigate } from "react-router-dom";
import "./Card.css";
import {
  HiOutlineShoppingCart,
  HiOutlineChevronDoubleRight,
} from "react-icons/hi";

import { usePizzaContext } from "../../context/PizzaContext";

const Card = ({ data }) => {
  const { formatearPrecio, añadirAlCarrito } = usePizzaContext();

  const { img, name, price, ingredients, id } = data;
  const navigate = useNavigate();

  const verPizza = () => {
    navigate(`/pizzas/${id}`);
  };

  return (
    <div className="card">
      <div className="card-img">
        <img src={img} alt={name} />
      </div>
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-description">
          <b>Ingredientes:</b> {ingredients.join(", ")}
        </p>
        <h3>{formatearPrecio(price)}</h3>
      </div>
      <div className="card-footer">
        <button onClick={verPizza}>
          <HiOutlineChevronDoubleRight aria-hidden="true" /> Ver Más
        </button>
        <button onClick={() => añadirAlCarrito(data)}>
          <HiOutlineShoppingCart aria-hidden="true" /> Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default Card;
