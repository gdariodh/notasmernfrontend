import { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import authContext from "../context/authContext";

const useSignup = () => {
  const AuthContext = useContext(authContext);
  const { createUser } = AuthContext;

  // validaciones
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Ingresa un nombre, es obligatorio"),
      email: Yup.string().email("Email no valido").required("Es obligatorio"),
      password: Yup.string()
        .required("El password es obligatorio")
        .min(6, "Debe tener al menos 6 caracteres"),
    }),
    onSubmit: (values) => {
      // console.log(values)
      createUser(values);
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
