import { Fragment } from "react";
import { useState, useEffect, useRef } from 'react';
import Formulario from "./Formulario";
import Lista from "./Lista";

const eva4 = () => {
  const [gastos, setGastos] = useState([]);

  //Función para agregar un gasto
  const agregarGasto = (gasto) => {
    setGastos([...gastos, gasto]);
  };

  //Función para eliminar un gasto
  const eliminarGasto = (id) => {
    setGastos(gastos.filter((gasto) => gasto.id !== id));
  };

  //Guardar en localStorage
  useEffect(() => {
    const storedGastos = JSON.parse(localStorage.getItem('gastos'));
    if (storedGastos) setGastos(storedGastos);
  }, []);

  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos));
  }, [gastos]);

  return (
    <div className="container">
      <h1 className="display-5 my-3">Seguimiento de Gastos 💸</h1>
      <Formulario agregarGasto={agregarGasto} />
      <Lista gastos={gastos} eliminarGasto={eliminarGasto} />
    </div>
  );
};

export default eva4
