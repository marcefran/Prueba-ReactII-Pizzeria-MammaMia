import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const irAlHome = () => {
    navigate("/");
  };

  return (
    <main>
      <section className="not-found card card-body">
        <img
          src="https://muttos.cl/wp-content/uploads/2022/06/pizzeria_14.png"
          alt=""
          aria-hidden="true"
        />
        <div>
          <h1>¿Buscas una pizza?</h1>
          <p>La página a la que intentaste ingresar no existe</p>
          <button onClick={irAlHome} className="btn">
            Revisa nuestro menú
          </button>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
