import React, { Component } from "react";
import uuid from "uuid";
import PropTypes from 'prop-types';
const stateInicial = {
  cita: {
    id: "",
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: ""
  },
  error: false,
  enviado: false
};
class NuevaCita extends Component {
  state = { ...stateInicial };
  OnHandleChange = e => {
    const { name, value } = e.target;
    this.setState({
      cita: {
        ...this.state.cita,
        [name]: value
      }
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { mascota, propietario, fecha, hora, sintomas } = this.state.cita;
    if (
      mascota === "" ||
      propietario === "" ||
      fecha === "" ||
      hora === "" ||
      sintomas === ""
    ) {
      this.setState({ error: true, enviado: false });
      return;
    } else {
      this.setState({ error: false, enviado: true });
      const nuevaCita = { ...this.state.cita };
      nuevaCita.id = uuid();
      this.props.crearNuevaCita(nuevaCita);
      this.setState({ ...stateInicial });
    }
  };
  render() {
    const { mascota, propietario, fecha, hora, sintomas } = this.state.cita;
    const { error } = this.state;
    return (
      <div className="card mt-5">
        <div className="card-header">Nuevo Paciente</div>
        <div className="card-body">
          <h2>Datos del paciente:</h2>
          <p>Llena el formulario para crear una nueva cita</p>
          {error ? (
            <div className="alert alert-danger mt-2 mb-5 text-center">
              Por favor completa todos los datos antes de enviar el formulario!
            </div>
          ) : null}
          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label
                htmlFor="Mascota"
                className="col-sm-4 col-lg-2 col-form-label"
              >
                Nombre mascota
              </label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="text"
                  className="form-control"
                  name="mascota"
                  placeholder="Nombre Mascota"
                  onChange={this.OnHandleChange}
                  value={mascota}
                />
              </div>

              <label
                htmlFor="Nombre"
                className="col-sm-4 col-lg-2 col-form-label"
              >
                Nombre Dueño
              </label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="text"
                  className="form-control"
                  name="propietario"
                  placeholder="Nombre"
                  onChange={this.OnHandleChange}
                  value={propietario}
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="Fecha"
                className="col-sm-4 col-lg-2 col-form-label"
              >
                Fecha
              </label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="date"
                  className="form-control"
                  name="fecha"
                  onChange={this.OnHandleChange}
                  value={fecha}
                />
              </div>

              <label
                htmlFor="Hora"
                className="col-sm-4 col-lg-2 col-form-label"
              >
                Hora
              </label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="time"
                  className="form-control"
                  name="hora"
                  onChange={this.OnHandleChange}
                  value={hora}
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="Sintomas"
                className="col-sm-4 col-lg-2 col-form-label"
              >
                Sintomas
              </label>
              <div className="col-sm-8 col-lg-10">
                <textarea
                  className="form-control"
                  placeholder="Describe los sintomas"
                  name="sintomas"
                  onChange={this.OnHandleChange}
                  value={sintomas}
                ></textarea>
              </div>
            </div>
            <input
              type="submit"
              className="py-3 mt-2 btn btn-success btn-block"
              value="Agregar nueva cita"
            />
          </form>
        </div>
      </div>
    );
  }
}
NuevaCita.propTypes = {
  crearNuevaCita: PropTypes.func.isRequired,
}
export default NuevaCita;
