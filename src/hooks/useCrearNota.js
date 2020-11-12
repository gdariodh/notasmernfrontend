import { useContext } from "react";
import { useFormik } from "formik";
import notaContext from "../context/notaContext";
import * as Yup from "yup";

const useCrearNota = () => {
  const NotaContext = useContext(notaContext);
  const { createNota } = NotaContext;

  // validaciones
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("El nombre es obligatorio"),
      description: Yup.string(),
    }),
    onSubmit: (values) => {
      createNota(values);
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

export default useCrearNota;
