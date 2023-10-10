import { usePizzaContext } from "../context/PizzaContext";
import { TiPlus, TiMinus } from "react-icons/ti";
import { useEffect } from "react";

const Carrito = () => {
  const { carrito, añadirAlCarrito, removerDelCarrito, formatearPrecio } =
    usePizzaContext();

  useEffect(() => {
    document.title = "Carrito - Pizzería Mamma Mía!";
  });

  return (
    <main>
      <section className="cart card card-body">
        <h1>Mi carrito</h1>
        {!carrito.items.length ? (
          <p>Tu carrito está vacío</p>
        ) : (
          <>
            <ul className="cart-list">
              {carrito.items.map((item) => (
                <li key={item.id}>
                  <div className="cart-item">
                    <img src={item.img} alt={item.name} />
                    <div>
                      <p>{item.name}</p>
                      <p>{formatearPrecio(item.precio * item.cantidad)}</p>
                    </div>
                  </div>

                  <div className="cart-item-buttons">
                    <button onClick={() => removerDelCarrito(item)}>
                      <TiMinus aria-hidden="true" />
                      <span className="visually-hidden">
                        Remover del carrito
                      </span>
                    </button>
                    <p className="cantidad">{item.cantidad}</p>
                    <button onClick={() => añadirAlCarrito(item)}>
                      <TiPlus aria-hidden="true" />
                      <span className="visually-hidden">
                        Agregar al carrito
                      </span>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="cart-footer">
              <h2>Total: {formatearPrecio(carrito.total)}</h2>
              <button className="btn">Ir a pagar</button>
            </div>
          </>
        )}
      </section>
    </main>
  );
};

export default Carrito;
