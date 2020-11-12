import { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import authContext from "../context/authContext";

const useSignup = () => {
  const AuthContext = useContext(authContext);
  const { LoginUser } = AuthContext;

  // validaciones
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email no valido")
        .required("Ingresa el email del usuario"),
      password: Yup.string()
        .required("El password es obligatorio")
        .min(6, "Debe tener al menos 6 caracteres"),
    }),
    onSubmit: (values) => {
      //console.log(values);
      LoginUser(values);
    },
  });

  // extraemos funciones que leeran lo que se ingresa
  const { handleChange, handleSubmit, handleBlur, values } = formik;

  return {
    formik,
    values,
    handleChange,
    handleSubmit,
    handleBlur,
  };
};

export default useSignup;
