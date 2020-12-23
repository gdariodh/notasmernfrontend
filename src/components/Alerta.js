import React, { useContext } from "react";
import authContext from "../context/authContext";
const Alerta = () => {
  const { alert, msg, alertColor } = useContext(authContext);
  return (
    <>
      {alert && alertColor && (
        <div
          data-cy='alert'
          className={`bg-${alertColor}-500 py-2 px-3 w-full my-3 max-w-lg text-center text-white mx-auto uppercase font-bold rounded-lg shadow-md`}
        >
          {msg}
        </div>
      )}
    </>
  );
};

export default Alerta;
