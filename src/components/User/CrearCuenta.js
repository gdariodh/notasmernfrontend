// Hooks
import useCrearCuenta from "../../hooks/useCrearCuenta";
// components 
import Banner from '../Layout/Banner'
import Alerta from '../Alerta'
const Signup = () => {
  const {
    values,
    formik,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useCrearCuenta();

  // extraemos los valores del value de formik
  const { name, email, password } = values;

  return (
    <>
      <div className="flex flex-col bg-gray-900 sm:flex-row h-screen">
        <div className="bg-gray-900 w-full md:p-20 p-12">
          <Banner crearCuenta={true}/>
        </div>

        <div className="bg-gray-900 w-full md:p-20 flex-wrap">
        <Alerta/>
          <form
            className="bg-white rounded shadow-md px-8 pt-6 pb-8"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                className="block text-black text-sm font-bold mb-2"
                htmlFor="name"
              >
                Nombre
              </label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                value={name}
                type="text"
                placeholder="nombre"
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {formik.touched.name && formik.errors.name && (
                <div className="my-2 bg-gray-200 border-l-4 border-green-500 text-gray-900 p-2">
                  <span className='font-semibold'>{formik.errors.name}</span>
                </div>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-black text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                value={email}
                type="email"
                placeholder="ejemplo@email.com"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {formik.touched.email && formik.errors.email && (
                <div className="my-2 bg-gray-200 border-l-4 border-green-500 text-gray-900 p-2">
                  <span className='font-semibold'>{formik.errors.email}</span>
                </div>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-black text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                value={password}
                type="password"
                placeholder="123456"
                id="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {formik.touched.password && formik.errors.password && (
                <div className="my-2 bg-gray-200 border-l-4 border-green-500 text-gray-900 p-2">
                  <span className='font-semibold'>{formik.errors.password}</span>
                </div>
              )}
            </div>
            <input
              type="submit"
              className="bg-green-500 hover:bg-green-600 w-full p-3 border rounded text-white uppercase font-bold"
              value="Crear cuenta"
            />
           
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
