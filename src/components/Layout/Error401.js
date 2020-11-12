import Alerta from '../Alerta'
const Error401 = () => {
    return ( 
        <div className="flex flex-col bg-gray-900 h-screen">
            <div className="container mx-auto py-20">
              <Alerta />
              <img
                className=" mx-auto h-24 w-24 md:h-40 md:w-40"
                src="https://www.flaticon.es/svg/static/icons/svg/508/508250.svg"
                alt="icon"
              />
            </div>
          </div>
     );
}
 


export default Error401;