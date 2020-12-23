import { useEffect, useContext } from "react";
import notaContext from "../../context/notaContext";
// libreria
import { Link } from "react-router-dom";
import { BiPlus } from "react-icons/bi";
// component preview de cada nota
import Nota from "./Nota";

const ListNotas = () => {
  const NotaContext = useContext(notaContext);
  const { notas, getListNotas } = NotaContext;

  useEffect(() => {
    getListNotas();
    // eslint-disable-next-line
  }, [notas]);

  return (
    <>
      {notas.length !== 0 ? (
        <>
          <ul className="flex md:flex-wrap md:flex-row flex-col md:ml-20 m-2">
            {notas.map((nota, i) => (
              <Nota data-cy="list-notas" nota={nota} key={`${nota._id}-${i}`} />
            ))}
          </ul>
        </>
      ) : (
        <div className="flex justify-center mt-32 md:mt-40 ">
          <Link data-cy="crear-nota-icon" to="/crear-nota" type="button">
            <span className="font-semibold text-2xl md:text-3xl">
              Crea una nota
            </span>
            <BiPlus className="w-auto h-16 mx-auto" />
          </Link>
        </div>
      )}
    </>
  );
};

export default ListNotas;
