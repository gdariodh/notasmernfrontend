// hooks
import useLogin from "../../hooks/useLogin";
const Login = () => {
  const { formik, values, handleChange, handleSubmit, handleBlur } = useLogin();

  return (
    <form
      data-cy='form-login'
      onSubmit={handleSubmit}
      className="bg-white rounded shadow-lg px-8 pt-6 pb-8 mb-4"
    >
      <div className="mb-4">
        <label
          className="block text-black text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          data-cy='input-email'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          type="email"
          placeholder="ejemplo@email.com"
          id="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {formik.touched.email && formik.errors.email && (
          <div data-cy='formik-email' className="my-2 bg-gray-200 border-l-4 border-green-500 text-gray-900 p-2">
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
          data-cy='input-password'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          type="password"
          placeholder="123456"
          id="password"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {formik.touched.password && formik.errors.password && (
          <div data-cy='formik-password' className="my-2 bg-gray-200 border-l-4 border-green-500 text-gray-900 p-2">
            <span className='font-semibold'>{formik.errors.password}</span>
          </div>
        )}
      </div>
      <input
        data-cy='submit-login'
        type="submit"
        className="bg-green-500 hover:bg-green-600 w-full p-3 border rounded text-white uppercase font-bold"
        value="Iniciar sesion"
      />
    </form>
  );
};

export default Login;
