import { useReducer } from "react";
import notaReducer from "./notaReducer";
import notaContext from "./notaContext";
import clientAxios from "../config/clientAxios";
import { useHistory } from "react-router-dom";
import {
  LISTADO_NOTAS_EXITO,
  LISTADO_NOTAS_ERROR,
  AGREGAR_NUEVA_NOTA_EXITO,
  AGREGAR_NUEVA_NOTA_ERROR,
  AGREGAR_NOTA_SELECCIONADA,
  NOTA_EDITADA_EXITO,
  NOTA_EDITADA_ERROR,
  NOTA_ELIMINADA_EXITO,
  NOTA_ELIMINADA_ERROR,
} from "../types";

const NotaState = ({ children }) => {
  const initialState = {
    notas: [],
    notaSeleccionada: {},
    alert: false,
    msg: null,
  };
  // FIXME: DEBO HACER LAS ALERTAS DE ERROR PARA LISTADO_NOTAS_ERROR Y AGREGAR_NUEVA_NOTA_ERROR!

  const [state, dispatch] = useReducer(notaReducer, initialState);

  let history = useHistory();

  // TODO: Funciones app
  const getListNotas = async () => {
    /* TODO: clientAxios ya tiene el token en los headers, gracias a userAuthorization y setToken
     que se ejecutan apenas carga la app o el componente de notas!*/
    try {
      const res = await clientAxios("/api/notas");
      dispatch({
        type: LISTADO_NOTAS_EXITO,
        payload: res.data.notas,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: LISTADO_NOTAS_ERROR,
        payload: error.response.data.msg,
      });
    }
  };

  // TODO: crea una nota
  const createNota = async (nota) => {
    try {
      const res = await clientAxios.post("/api/notas", nota);
      dispatch({
        type: AGREGAR_NUEVA_NOTA_EXITO,
        payload: res.data.nota,
      });
      history.push("/notas");
    } catch (error) {
      console.log(error);
      dispatch({
        type: AGREGAR_NUEVA_NOTA_ERROR,
        payload: error.response.data.msg,
      });
    }
  };

  // TODO: selecciona la nota que servira para ser editada.
  const selectNota = (nota) => {
    //console.log(nota)
    dispatch({
      type: AGREGAR_NOTA_SELECCIONADA,
      payload: nota,
    });
  };

  // TODO: edita la nota seleccionada trabaja en conjunto con notaSeleccionada -> se manda a useEditarNota
  const editNota = async (notaEditada, _id) => {
    /* TODO: ya aca ya esta la tarea editada mediante el formulario de notaEdit,
     que trabaja con useEditarNota que lee los datos que cambian*/
    //console.log(notaEditada);
    //console.log(_id);
    try {
      const res = await clientAxios.put(`/api/notas/${_id}`, notaEditada);
      //console.log(res.data.notaActualizada);
      dispatch({
        type: NOTA_EDITADA_EXITO,
        payload: res.data.notaActualizada,
      });
      history.push("/notas");
    } catch (error) {
      console.log(error);
      dispatch({
        type: NOTA_EDITADA_ERROR,
        payload: error.response.data.msg,
      });
    }
  };

  const deleteNota = async (nota) => {
    try {
      const res = await clientAxios.delete(`/api/notas/${nota._id}`);
      //console.log(res.data.msg);
      let eliminado = {
        msg: res.data.msg,
        id: nota._id,
      };
      dispatch({
        type: NOTA_ELIMINADA_EXITO,
        payload: eliminado,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: NOTA_ELIMINADA_ERROR,
        payload: error.response.data.msg,
      });
    }
  };

  return (
    <notaContext.Provider
      value={{
        notas: state.notas,
        notaSeleccionada: state.notaSeleccionada,
        alert: state.alert,
        msg: state.msg,
        getListNotas,
        createNota,
        selectNota,
        editNota,
        deleteNota,
      }}
    >
      {children}
    </notaContext.Provider>
  );
};

export default NotaState;
