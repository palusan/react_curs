import React, { useState } from "react";

function FormularioDeNotas({ notas, agregarNota }) {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (titulo.trim() === "" || descripcion.trim() === "") return;

    agregarNota({
      titulo: titulo.trim(),
      descripcion: descripcion.trim(),
      completada: false,
      id: notas && notas.length > 0 ? notas.at(-1).id + 1 : 1
    });
    setTitulo("");
    setDescripcion("");
  };

  return (
    <form className="FormularioDeNotas" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(event) => setTitulo(event.target.value)}
      />
      <textarea
        placeholder="Descripción"
        value={descripcion}
        onChange={(event) => setDescripcion(event.target.value)}
      />
      <button type="submit">Agregar nota</button>
    </form>
  );
}

export default FormularioDeNotas;
