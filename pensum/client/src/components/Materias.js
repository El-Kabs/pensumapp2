// Importar librerias
import React from 'react';
import {Alert, Glyphicon, Button, Modal} from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default class Materias extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.fetchMaterias();
  }

  showEditModal(materiaToEdit) {
    //this.props.mappedshowEditModal(materiaToEdit);
  }

  hideEditModal() {
    //this.props.mappedHideEditModal();
  }

  render() {
    const materiaState = this.props.mappedMateriaState;
    const materias = materiaState.materias;
    return (<div className="col-md-12">
      <h3 className="centerAlign">Materias</h3>
      {!materias && materiaState.isFetching && <p>Cargando materias...</p>}
      {materias.length <= 0 && !materiaState.isFetching && <p>No hay materias disponibles.</p>}
      {
        materias && materias.length > 0 && !materiaState.isFetching && <table className="table materiasTable">
            <thead>
              <tr>
                <th>Materia</th>
                <th className="textCenter">Edit</th>
                <th className="textCenter">View</th>
              </tr>
            </thead>
            <tbody>
              {
                materias.map((materia, i) => <tr key={i}>
                  <td>{materia.materiaText}</td>
                  <td className="textCenter">
                    <Button onClick={() => this.showEditModal(materia)} bsStyle="info" bsSize="xsmall"><Glyphicon glyph="pencil"/></Button>
                  </td>
                  <td className="textCenter">
                    <Link to={`/${materia.codigo}`}>View Details</Link>
                  </td>
                </tr>)
              }
            </tbody>
          </table>
      }
    </div>);
  }

}
