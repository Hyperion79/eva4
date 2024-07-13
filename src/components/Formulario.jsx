import { useRef } from 'react';

const Formulario = ({ agregarGasto }) => {
  const descripcionRef = useRef();
  const montoRef = useRef();
  const categoriaRef = useRef();
  const fechaRef = useRef();

  const seguimientoGasto = (e) => {
    e.preventDefault();
    const descripcion = descripcionRef.current.value.trim();
    const monto = montoRef.current.value.trim();
    const categoria = categoriaRef.current.value;
    const fecha = fechaRef.current.value;

    if (!descripcion || !monto || !categoria || !fecha) return;

    const nuevoGasto = {
      id: Date.now(),
      descripcion,
      monto: parseFloat(monto),
      categoria,
      fecha,
    };

    agregarGasto(nuevoGasto);
    e.target.reset();
  };

  return (
    <form onSubmit={seguimientoGasto} className="my-5">
      <div className="mb-3">
        <label className="form-label">Descripción</label>
        <input type="text" className="form-control" ref={descripcionRef} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Monto</label>
        <input type="number" className="form-control" ref={montoRef} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Categoría</label>
        <select className="form-select" ref={categoriaRef} required>
          <option value="">Seleccione una categoría</option>
          <option value="Alimentación">Alimentación</option>
          <option value="Transporte">Transporte</option>
          <option value="Entretenimiento">Entretenimiento</option>
          <option value="Otros">Otros</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Fecha</label>
        <input type="date" className="form-control" ref={fechaRef} required />
      </div>
      <button type="submit" className="btn btn-primary w-100">Agregar Gasto</button>
    </form>
  );
};

export default Formulario;