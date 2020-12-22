import { useContext, useEffect } from "react";
// TODO: Context de los state principales
import authContext from "../../context/authContext";
// TODO: components que forman el componente de notas del usuario
import Error401 from "../Layout/Error401";
import Header from "./Header";
// Routing
import { useHistory } from "react-router-dom";
// custom hook que lee los datos
import useCrearNota from "../../hooks/useCrearNota";

const NotaCreate = () => {
  const { auth, user, userAuthorization } = useContext(authContext);
  let history = useHistory();
  useEffect(() => {
    // TODO: si hay un token ejecuta el userAuthorization
    if (localStorage.getItem("token")) userAuthorization();
    else history.push("/");
    // eslint-disable-next-line
  }, []);

  const {
    formik,
    values,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useCrearNota();

  return (
    <>
      {auth && user ? (
        <>
          {/** TODO: Layout */}

          {/** TODO: Fondo */}
          <div className="bg-gray-200 h-screen flex flex-col">
            {/** Header  */}
            <Header user={user} note="true" />
            <div className="w-full h-full flex-wrap shadow-inner">
              <div className="p-2 mt-2 bg-gray-200">
                {/** TODO: Panel del usuario de crearNotas */}
                <div className="mt-8">
                  <p className="text-center font-semibold text-2xl md:text-3xl">
                    Crear Nota
                  </p>

                  {formik.touched.name && formik.errors.name && (
                    <div className="flex justify-center my-2 text-red-600 p-2">
                      <span className="font-semibold">
                        {formik.errors.name}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-center mt-4 md:mt-0">
                    {/** Formulario */}
                    <form
                      onSubmit={handleSubmit}
                      className="max-w-sm rounded  bg-yellow-300 shadow-lg md:m-4 mb-6  w-full md:w-1/3 h-full"
                    >
                      <div className="px-6 py-4">
                        <label
                          htmlFor="name"
                          className=" text-xl md:mb-2 flex flex-wrap justify-center text-gray-900"
                        >
                          Nombre
                        </label>
                        <input
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                          id="name"
                          type="text"
                          className=" text-gray-900 text-base bg-yellow-300 w-full p-4 focus:outline-none"
                        />
                      </div>
                      <div className="px-6 py-4">
                        <label
                          htmlFor="description"
                          className=" text-xl flex flex-wrap justify-center text-gray-900 "
                        >
                          Contenido
                        </label>
                        <textarea
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.description}
                          id="description"
                          type="text"
                          className=" text-gray-900 text-base bg-yellow-300 w-full p-4  focus:outline-none"
                        />
                      </div>
                      {values.name !== "" && (
                        <input
                          type="submit"
                          className="bg-yellow-300  w-full p-2 text-gray-900 uppercase font-semibold focus:outline-none"
                          value="Crear nota &#128204;"
                        />
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Error401 />
      )}
    </>
  );
};

export default NotaCreate;
