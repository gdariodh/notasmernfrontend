import { useEffect } from "react";
// ROUTING
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
// STATE
import AuthState from "./context/authState";
import NotaState from "./context/notaState";
// CONTEXT
import setToken from "./config/setToken";

function App() {
  // TODO: apenas carga la app observa si hay un token, y si hay. Lo envia al setToken que es el agrega el token a los headers del clientAxios
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    } else return;
  }, []);
  return (
    <Router>
      {/** TODO: el state principal lo pongo dentro del Router para hacer los redirects */}
      <AuthState>
        <NotaState>
          <Routes />
        </NotaState>
      </AuthState>
    </Router>
  );
}

export default App;
