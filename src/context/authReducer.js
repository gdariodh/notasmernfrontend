// TODO: types
import {
  LIMPIAR_ALERTA,
  CREAR_CUENTA_EXITO,
  CREAR_CUENTA_ERROR,
  LOGIN_EXITO,
  LOGIN_ERROR,
  USER_AUTENTICADO_EXITO,
  USER_AUTENTICADO_ERROR,
  LOGOUT_USER,
} from "../types";

const authReducer = (state, action) => {
  switch (action.type) {
    case CREAR_CUENTA_EXITO:
    case LOGIN_EXITO:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        msg: action.payload.msg,
        token: action.payload.token,
        alert: true,
        alertColor: action.payload.color,
      };

    case CREAR_CUENTA_ERROR:
    case LOGIN_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        msg: action.payload.msg,
        alert: true,
        alertColor: action.payload.color,
      };

    case USER_AUTENTICADO_EXITO:
      return {
        ...state,
        user: action.payload,
        auth: true,
      };

    case USER_AUTENTICADO_ERROR:
      return {
        ...state,
        msg: action.payload,
        token: null,
        user: null,
        auth: false,
        alert: true,
        alertColor: "red",
      };

    case LIMPIAR_ALERTA:
      return {
        ...state,
        alert: false,
        alertColor: null,
      };

    case LOGOUT_USER:
      localStorage.removeItem("token")
      return {
        token: null,
        user: null,
        auth: false,
        msg: null,
        alert: false,
        alertColor: null,
      };

    default:
      return state;
  }
};

export default authReducer;
