import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addMateria } from "../actions/index";
const mapDispatchToProps = dispatch => {
  return {
    addMateria: materia => dispatch(addMateria(materia))
  };
};
class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
      titulo: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { titulo } = this.state;
    const id = uuidv1();
    this.props.addMateria({ titulo, id });
    this.setState({ titulo: "" });
  }
  render() {
    const { titulo } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="titulo">Titulo</label>
          <input
            type="text"
            className="form-control"
            id="titulo"
            value={titulo}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          Guardar
        </button>
      </form>
    );
  }
}
const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;
