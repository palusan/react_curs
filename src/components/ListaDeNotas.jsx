import React from "react";
import Nota from "./Nota";

function ListaDeNotas({ notas, eliminarNota, marcarCompletada }) {
  return (
    <div className="ListaDeNotas">
      {notas &&
        notas.map((nota) => (
          <Nota
            key={nota.id}
            id={nota.id}
            titulo={nota.titulo}
            descripcion={nota.descripcion}
            completada={nota.completada}
            eliminarNota={eliminarNota}
            marcarCompletada={marcarCompletada}
          />
        ))}
    </div>
  );
}

export default ListaDeNotas;
