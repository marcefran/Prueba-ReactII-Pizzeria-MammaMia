import { BrowserRouter, Routes, Route } from "react-router-dom";
//VIEWS
import Home from "./views/Home";
import Detalle from "./views/Detalle";
import Carrito from "./views/Carrito";
import NotFound from "./views/NotFound";
//COMPONENTS
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
//CONTEXT
import PizzaProvider from "./context/PizzaContext";

//TOASTS
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="app">
      <PizzaProvider>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pizzas/:id" element={<Detalle />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>

          <ToastContainer />
          <Footer />
        </BrowserRouter>
      </PizzaProvider>
    </div>
  );
}

export default App;
