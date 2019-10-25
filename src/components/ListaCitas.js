import React from "react";
import Cita from "./Cita";
import PropTypes from 'prop-types';
export const ListaCitas = ({ citas, eliminarCita }) => {

    // imprimir un mensaje en base a si hay citas o no
const mensaje = Object.keys(citas).length === 0 ? 'Agrega una cita' : 'Lista de citas agregadas';
  return (
    <div className="card">
      <div className="card-header">{mensaje}</div>
      <div className="card-body">
        {citas.map(cita => (
          <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
        ))}
      </div>
    </div>
  );
};
ListaCitas.propTypes = {
    citas: PropTypes.array.isRequired,
    eliminarCita: PropTypes.func.isRequired
}
export default ListaCitas;
