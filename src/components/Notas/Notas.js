import { useContext, useEffect } from "react";
// TODO: Context de los state principales
import authContext from "../../context/authContext";
// TODO: components que forman el componente de notas del usuario
import Error401 from "../Layout/Error401";
import Header from "./Header";
import ListNotas from "./ListNotas";
// Routing
import { useHistory } from "react-router-dom";

const Notas = () => {
  const { auth, user, userAuthorization } = useContext(authContext);
  let history = useHistory();
  useEffect(() => {
    // TODO: si hay un token ejecuta el userAuthorization
    if (localStorage.getItem("token")) userAuthorization();
    else history.push("/");
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {auth && user ? (
        <>
          {/** Componente de notas del usuario */}
          <div className="bg-gray-200 h-screen flex flex-col">
            {/**TODO: Header o panel del usuario donde estara algunos botones y logout de la sesion */}
            <Header user={user} />
            {/**  panel de notas */}
            <div className="w-full h-full flex-wrap shadow-inner">
              <div className="p-2 mt-2 md:mt-4 bg-gray-200">
                {/**El Listado de todas las notas del usuario */}
                <ListNotas />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/** TODO: Componente para los que intenta ingresar a notas sin authorization token,
          les dara el componente con la alerta y msg de error de que no estan autorizados
           */}
          <Error401 />
        </>
      )}{" "}
    </>
  );
};

export default Notas;
