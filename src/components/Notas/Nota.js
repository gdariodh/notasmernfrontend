import { useContext } from "react";
import notaContext from "../../context/notaContext";
// librerias
import { Link } from "react-router-dom";
import { BiX } from "react-icons/bi";

const Nota = ({ nota }) => {
  //console.log(nota)

  const { selectNota, deleteNota } = useContext(notaContext);

  const handleActualizarNota = (nota) => selectNota(nota);

  const handleEliminarNota = (nota) => deleteNota(nota);

  return (
    <>
      {/** TODO: overflow-hidden para que no se salgan cosas del div */}
      <div className="max-w-sm rounded overflow-y-auto h-40 md:h-64 bg-yellow-300 shadow-lg md:m-4 mb-6 w-full md:w-1/5">
        <div className="flex justify-between">
          <Link to="editar-nota">
            <button
              onClick={() => handleActualizarNota(nota)}
              className="px-3 py-3 md:text-sm font-semibold ml-2 flex"
            >
              Editar nota
            </button>
          </Link>
          <button
            onClick={() => handleEliminarNota(nota)}
            className=" px-3 py-3 "
          >
            <BiX className="w-auto h-8 md:h-6" />
          </button>
        </div>
        <div className="px-5">
          <div className="font-bold text-lg mb-1 ">{nota.name}</div>
          <p className="text-gray-900 text-base">{nota.description}</p>
        </div>
      </div>
    </>
  );
};

export default Nota;
