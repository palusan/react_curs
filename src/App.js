import React, { useState, useEffect } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioDeNotas from "./components/FormularioDeNotas";
import "./App.scss";

function App() {
  const [notas, setNotas] = useState();

  useEffect(() => {
    if (!localStorage.getItem("notas")) return;
    setNotas(JSON.parse(localStorage.getItem("notas")));
  }, []);

  useEffect(() => {
    if (!notas) return;
    localStorage.setItem("notas", JSON.stringify(notas));
  }, [notas]);

  function agregarNota(nuevaNota) {
    setNotas([...notas, nuevaNota]);
  }

  function eliminarNota(id) {
    const nuevasNotas = notas.filter((nota) => nota.id !== id);
    setNotas(nuevasNotas);
  }

  function marcarCompletada(id) {
    const nuevasNotas = notas.map((nota) => {
      if (nota.id === id) {
        return { ...nota, completada: true };
      }
      return nota;
    });
    setNotas(nuevasNotas);
  }

  return (
    <div className="App">
      <h1>Aplicación de notas V2</h1>
      <FormularioDeNotas notas={notas} agregarNota={agregarNota} />
      <ListaDeNotas
        notas={notas}
        eliminarNota={eliminarNota}
        marcarCompletada={marcarCompletada}
      />
    </div>
  );
}

export default App;
