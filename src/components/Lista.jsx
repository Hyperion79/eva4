const Lista = ({ gastos, eliminarGasto }) => {
    return (
      <ul className="list-group my-5">
        {gastos.map((gasto) => (
          <li key={gasto.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h5 className="mb-1">{gasto.descripcion}</h5>
              <small className="text-muted">{gasto.categoria} - {gasto.fecha}</small>
            </div>
            <span className="badge bg-primary rounded-pill">${gasto.monto.toFixed(2)}</span>
            <button className="btn btn-danger btn-sm ms-3" onClick={() => eliminarGasto(gasto.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default Lista