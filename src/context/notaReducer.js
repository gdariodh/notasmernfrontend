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

const CitaReducer = (state, action) => {
  switch (action.type) {
    case LISTADO_NOTAS_EXITO:
      return {
        ...state,
        notas: action.payload,
        alert: false,
      };

    case AGREGAR_NUEVA_NOTA_EXITO:
      return {
        ...state,
        notas: [action.payload, ...state.notas],
        alert: false,
      };

    case LISTADO_NOTAS_ERROR:
    case AGREGAR_NUEVA_NOTA_ERROR:
    case NOTA_EDITADA_ERROR:
    case NOTA_ELIMINADA_ERROR:
      return {
        ...state,
        alert: true,
        msg: action.payload,
      };

    case AGREGAR_NOTA_SELECCIONADA:
      return {
        ...state,
        notaSeleccionada: action.payload,
      };

    case NOTA_EDITADA_EXITO:
      return {
        ...state,
        notas: state.notas.map((nota) =>
          nota._id === action.payload._id ? action.payload : nota
        ),
      };

    case NOTA_ELIMINADA_EXITO:
      return {
        ...state,
        notas: state.notas.filter((nota) => nota._id !== action.payload.id),
        msg: action.payload.msg,
      };

    default:
      return state;
  }
};

export default CitaReducer;
