//TODO: header del panel de notas del usuario
// libreria de icons
import { BiLogOut, BiPlus,BiShare } from "react-icons/bi";
import { useContext } from "react";
import authContext from "../../context/authContext";
import { Link } from "react-router-dom";

const Header = ({ user,note }) => {
  const { logoutUser } = useContext(authContext);

  return (
    <header className="bg-gray-900 shadow-inner w-full  shadow-lg py-4 border-b-4 border-green-500">
      <div className="flex justify-between ">
        {/**TODO: Usuario */}
        {/** TODO: si quieres redireccionar a la misma pagina to='#' */}
        <Link to="/notas">
          <div className="flex flex-col md:flex-row">
            <img
              className="h-10 md:ml-8 ml-4 mr-2"
              src="https://www.flaticon.es/svg/static/icons/svg/2521/2521818.svg"
              alt='user icon'
            />

            <div className="mt-2 ml-6 md:mx-2 md:mt-1 text-xl flex">
            <p className='font-semibold text-gray-200 mr-2'>Hola!</p>
              <span className="font-bold text-gray-200">
                {" "}
                {user.nombre} &#128526;
              </span>
            </div>
          </div>
        </Link>

        {/**TODO: Funciones de usuario */}
        <div className="mt-4 mr-4 md:mt-0 md:mr-0 ">
          <div className="flex md:flex-no-wrap">
          {
            note !== 'true' ? <Link data-cy='crear-nota' to="/crear-nota" type="button" className="mr-8 md:mr-12">
              <BiPlus color="white" className="w-auto h-10" />
            </Link>  : <Link to="/notas" type="button" className="mr-8 md:mr-12">
              <BiShare color="white" className="w-auto h-10" />
            </Link>
          }
            
            <div className="flex md:mr-12 mr-4 ">
              <Link data-cy='logout' to="/" onClick={() => logoutUser()} type="button">
                <BiLogOut color="white" className="w-auto h-10" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
