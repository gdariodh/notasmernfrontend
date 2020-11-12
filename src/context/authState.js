import { useReducer } from "react";
import authContext from "./authContext";
import authReducer from "./authReducer";
import { useHistory } from "react-router-dom";
// axios configurado
import clientAxios from "../config/clientAxios";
// TODO: fn que agrega el token al header del clienteAxios
import setToken from "../config/setToken";
// types
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

const AuthState = ({ children }) => {
  const initialState = {
    token: typeof window !== "undefined" ? localStorage.getItem("token") : null,
    user: null,
    auth: false,
    msg: null,
    alert: false,
    alertColor: null,
  };

  let history = useHistory();

  const [state, dispatch] = useReducer(authReducer, initialState);

  const createUser = async (values) => {
    try {
      const res = await clientAxios.post("/api/usuarios", values);
      //console.log(res.data);
      const userData = {
        token: res.data.token,
        msg: res.data.msg,
        color: "green",
      };
      dispatch({
        type: CREAR_CUENTA_EXITO,
        payload: userData,
      });

      setTimeout(() => {
        history.push("/notas");
      }, 1500);
    } catch (error) {
      console.log(error);
      const alerta = {
        msg: error.response.data.msg,
        color: "red",
      };
      dispatch({
        type: CREAR_CUENTA_ERROR,
        payload: alerta,
      });
    }

    setTimeout(() => {
      dispatch({
        type: LIMPIAR_ALERTA,
      });
    }, 1500);
  };

  const LoginUser = async (values) => {
    try {
      const res = await clientAxios.post("/api/auth", values);
      //console.log(res.data);
      const user = {
        token: res.data.token,
        msg: res.data.msg,
        color: "green",
      };
      dispatch({
        type: LOGIN_EXITO,
        payload: user,
      });
      setTimeout(() => {
        history.push("/notas");
      }, 1500);
    } catch (error) {
      console.log(error);
      const alerta = {
        msg: error.response.data.msg,
        color: "red",
      };
      dispatch({
        type: LOGIN_ERROR,
        payload: alerta,
      });
    }
    setTimeout(() => {
      dispatch({
        type: LIMPIAR_ALERTA,
      });
    }, 1500);
  };

  // TODO: extrae el token del localStorage y si existe, lo inyecta en los headers.
  const userAuthorization = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      // TODO: agregamos el token del localStorage a la funcion que agrega ese token a los headers del clienteAxios.
      setToken(token);
    }
    // TODO: A partir de aca el token esta en el header del clienteAxios
    try {
      // extrae el objeto de usuario gracias al token que esta asignado en los headers del clienteAxios
      const res = await clientAxios("/api/auth");
      dispatch({
        type: USER_AUTENTICADO_EXITO,
        payload: res.data.usuario,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: USER_AUTENTICADO_ERROR,
        payload: error.response.data.msg,
      });
      setTimeout(() => {
        dispatch({ type: LIMPIAR_ALERTA });
        history.push("/");
      }, 1800);
    }
  };

  const logoutUser = () => {
    dispatch({
      type: LOGOUT_USER,
    });
  };

  return (
    <authContext.Provider
      value={{
        token: state.token,
        user: state.user,
        auth: state.auth,
        msg: state.msg,
        alert: state.alert,
        alertColor: state.alertColor,
        createUser,
        LoginUser,
        userAuthorization,
        logoutUser,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthState;
