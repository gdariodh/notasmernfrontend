import { Route, Switch } from "react-router-dom";
// Components
import Home from "../components/User/Home";
import CrearCuenta from "../components/User/CrearCuenta";
import Login from "../components/User/Login";
import Notas from "../components/Notas/Notas";
import NotaCreate from '../components/Notas/NotaCreate'
import NotaEdit from '../components/Notas/NotaEdit'

const Index = () => {
  return (
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/crear-cuenta" component={CrearCuenta} />
      <Route exact path="/iniciar-sesion" component={Login} />
      <Route exact path="/notas" component={Notas} /> 
      <Route exact path="/crear-nota" component={NotaCreate} /> 
      <Route exact path="/editar-nota" component={NotaEdit} /> 
      <Route  path="/" component={Home} />
    </Switch>
  );
};

export default Index;
