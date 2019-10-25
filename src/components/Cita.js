import React from "react";
import PropTypes from 'prop-types';
const Cita = ({ cita, eliminarCita }) => {
  const { id, mascota, propietario, fecha, hora, sintomas } = cita;
  return (
    <div className="media mt-3">
      <div className="media-body">
        <h3 className="mt-0">Mascota: {mascota}</h3>
        <p className="card-text">Propietario: {propietario}</p>
        <p className="card-text">Fecha: {fecha}</p>
        <p className="card-text">Hora: {hora}</p>
        <p className="card-text">Sintomas: {sintomas}</p>
        <button
        className="btn btn-sm btn-danger mt-2"
        onClick={()=>eliminarCita(id)}
        >Borrar &times; </button>
      </div>
    </div>
  );
};
Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}
export default Cita;
