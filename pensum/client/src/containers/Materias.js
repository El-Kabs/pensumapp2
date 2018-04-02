// Importar librerias
import { connect } from 'react-redux';
import * as materiaActions from '../actions/materiaActions';
import Materias from '../components/Materias';

const mapStateToProps = (state, ownProps) => {
  return {
    mappedMateriaState: state.materiaState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMaterias: () => dispatch(materiaActions.fetchMaterias()),
    mappedEditMateria: materiaToEdit => dispatch(materiaActions.editMateria(materiaToEdit))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Materias);
