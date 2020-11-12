// Components Layout
import Login from "./Login";
import Banner from "../Layout/Banner";
import { Link } from "react-router-dom";

// components
import Alerta from '../Alerta'

const Home = () => {
  return (
    <>
    {/** TODO: h-screen es que toma toda la pantalla de cualquier dispositivo */}
    <div className="flex flex-col sm:flex-row h-screen">
      <div className="bg-gray-900 w-full md:p-24 p-12">
        <Banner />
      </div>
      <div className="bg-gray-900 w-full h-full md:p-10 flex-wrap">
      <Alerta/>
      <h1 className='text-white font-bold text-center text-4xl'>Inicia sesion</h1>
        <Login />
        <Link to="/crear-cuenta" className='text-xl'>
          <p className="text-white opacity-75 font-semibold mt-3 text-center">
            ¿Aún no tienes una cuenta? &#128561;
            <span className="font-bold text-white ml-2 underline">Crea una cuenta</span>
          </p>
        </Link>
      </div>
    </div>
    </>
  );
};

export default Home;
