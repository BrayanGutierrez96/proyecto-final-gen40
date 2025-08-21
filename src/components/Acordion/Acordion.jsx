import React, { useState } from "react";

function Acordion() {
  const [abrir, setAbrir] = useState(false);
  return (
    <div data-testid="contenedor" className="flex flex-col items-center gap-4">
      <h1 className="font-bold">Acordion</h1>
      <button
        className="border py-2 px-4 rounded-lg hover:bg-white hover:text-black cursor-pointer"
        onClick={() => {
          setAbrir(!abrir);
        }}
      >
        {abrir ? "ocultar" : "mostrar"}
      </button>
      {abrir && (
        <p data-testid="contenedor-contenido" className="text-md font-normal">
          Lorem ipsum dolor sit amet.
        </p>
      )}
      <input type="text" placeholder="Escribe aquí tu texto" className="border py-1 px-2" />
    </div>
  );
}

export default Acordion;
