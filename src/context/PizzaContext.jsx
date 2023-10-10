import { createContext, useContext, useState } from "react";
import pizzasJson from "../data/pizzas.json";
import { toast, cssTransition } from "react-toastify";
import "animate.css";
import { GrAddCircle } from "react-icons/gr";

const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
  const carritoInicial = {
    total: 0,
    cantidadPizzas: 0,
    items: [],
  };

  const [pizzas, setPizzas] = useState(pizzasJson);
  const [carrito, setCarrito] = useState(carritoInicial);

  const actualizarTotales = () => {
    carrito.total = carrito.items.reduce((acc, item) => {
      return acc + item.cantidad * item.precio;
    }, 0);

    carrito.cantidadPizzas = carrito.items.reduce((acc, item) => {
      return acc + item.cantidad;
    }, 0);
  };

  const mostrarToast = (texto) => {
    const animacion = cssTransition({
      enter: "animate__animated animate__fadeInUp",
      exit: "animate__animated animate__fadeOut",
    });

    toast(texto, {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 2000,
      transition: animacion,
      hideProgressBar: true,
    });
  };

  const añadirAlCarrito = (pizza) => {
    const pizzaIndex = carrito.items.findIndex((item) => item.id === pizza.id);

    pizzaIndex === -1
      ? carrito.items.push({
          name: pizza.name,
          img: pizza.img,
          id: pizza.id,
          precio: pizza.price,
          cantidad: 1,
        })
      : carrito.items[pizzaIndex].cantidad++;

    actualizarTotales();

    setCarrito({ ...carrito });
    mostrarToast(
      `Añadido exitosamente: ${
        pizza.name[0].toUpperCase() + pizza.name.slice(1)
      }`
    );
  };

  const removerDelCarrito = (pizza) => {
    const pizzaIndex = carrito.items.findIndex((item) => item.id === pizza.id);

    carrito.items[pizzaIndex].cantidad > 1
      ? carrito.items[pizzaIndex].cantidad--
      : carrito.items.splice(pizzaIndex, 1);

    actualizarTotales();

    setCarrito({ ...carrito });
    mostrarToast(
      `Eliminado exitosamente: ${
        pizza.name[0].toUpperCase() + pizza.name.slice(1)
      }`
    );
  };

  const formatearPrecio = (price) => {
    const numberToCLP = new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
    });

    return numberToCLP.format(price);
  };

  return (
    <PizzaContext.Provider
      value={{
        pizzas,
        setPizzas,
        carrito,
        setCarrito,
        formatearPrecio,
        añadirAlCarrito,
        removerDelCarrito,
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};

export const usePizzaContext = () => useContext(PizzaContext);

export default PizzaProvider;
