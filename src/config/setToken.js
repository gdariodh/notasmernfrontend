import clientAxios from './clientAxios'

// agrega el token extraido del localStorage a los headers del clientAxios
const setToken = (token) => {
    if(token){
        // TODO: agrega el token al header
        clientAxios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }else{
        // TODO: elimina cualquier token del header, si no esta autorizado
        delete clientAxios.defaults.headers.common['Authorization']
    }
}

export default setToken;