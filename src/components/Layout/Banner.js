import { Link } from "react-router-dom";

// TODO: https://www.flaticon.es/svg/static/icons/svg/727/727399.svg LINK DE FOTO DE USUARIO SIN FOTO


const Banner = ({ crearCuenta }) => {
  //console.log(crearCuenta);
  return (
    <>
      {crearCuenta ? (
        <>
          <div className="group bg-white mb-6 border rounded-lg p-4 shadow-lg">
            <p className="text-gray-900 font-bold text-center text-4xl uppercase">
              CREA UNA CUENTA Y DISFRUTA
            </p>
          </div>

          <div className="flex wrap justify-around">
            <img
              className=" justify-center h-24 w-24 flex-col"
              src="https://www.flaticon.es/svg/static/icons/svg/1256/1256628.svg"
              alt="icon"
            />
            <img
              className=" justify-center h-24 w-24 flex-col"
              src="https://www.flaticon.es/svg/static/icons/svg/501/501424.svg"
              alt="icon"
            />
          </div>

          <div>
            <Link to="/home" className='text-xl'>
              <p className="text-white opacity-75 font-semibold mt-6 text-center">
                ¿Ya tienes una cuenta? &#128073;
                <span className="font-bold text-white ml-2 underline">
                  Iniciar sesión
                </span>
              </p>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="group bg-white mb-6 border rounded-lg p-4 shadow-lg">
            <p className="text-gray-900 font-bold text-center text-4xl uppercase">
              Notas MERN
            </p>
            <p className="text-gray-700 font-semibold text-justify text-xl">
              "Lleva el control de tus notas como nunca lo has hecho".
            </p>
          </div>
          <div className="container">
            <img
              className=" mx-auto h-24 w-24 md:h-40 md:w-40"
              src="https://www.flaticon.es/svg/static/icons/svg/889/889648.svg"
              alt="icon"
            />
          </div>
        </>
      )}
    </>
  );
};

export default Banner;
