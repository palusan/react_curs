import React from "react";

function Nota({
  id,
  titulo,
  descripcion,
  completada,
  eliminarNota,
  marcarCompletada
}) {
  const handleClickEliminar = () => {
    eliminarNota(id);
  };

  const handleClickCompletada = () => {
    marcarCompletada(id);
  };

  return (
    <div className={`Nota ${completada && "completada"}`}>
      <h2 className="titulo">
        {id}. {titulo}
      </h2>
      <p className="descripcion">{descripcion}</p>
      <div className="acciones">
        <button className="boton-completada" onClick={handleClickCompletada}>
          Completada
        </button>
        <button className="boton-eliminar" onClick={handleClickEliminar}>
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default Nota;
