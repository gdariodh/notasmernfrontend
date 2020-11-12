import { useContext } from "react";
import { useFormik } from "formik";
import notaContext from "../context/notaContext";
import * as Yup from "yup";

const useCrearNota = () => {
  const NotaContext = useContext(notaContext);
  const { notaSeleccionada, editNota } = NotaContext;
  const { name, description,_id } = notaSeleccionada;
  // validaciones
  const formik = useFormik({
    initialValues: {
      name: notaSeleccionada.name !== null ? name : "",
      description: notaSeleccionada.description !== null ? description : ""
    },
    validationSchema: Yup.object({
      name: Yup.string().required("El nombre es obligatorio"),
      description: Yup.string(),
    }),
    onSubmit: (values) => {
      // TODO: pasamos el id tambien porque ese no cambia con el onChange y no esta como initialValues
      editNota(values, _id);
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
