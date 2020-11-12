import axios from 'axios';

const clientAxios = axios.create({
    baseURL:process.env.REACT_APP_BACKEND_URL
})

export default clientAxios;

//TODO: En create-react-app para poder usar una variable env debes nombrarla como
// REACT_APP_NOMBRE porque como create-react-app se compila en el client
// no quiere exponer claves secretas, por lo tanto si no las nombras asi, lo va a ignorar.