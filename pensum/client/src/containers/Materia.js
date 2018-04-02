// Importar librerias
import { connect } from 'react-redux';
import * as materiaActions from '../actions/materiaActions';
import Materia from '../components/Materia';

const mapStateToProps = (state) => {
  return {
    mappedMateriaState: state.materiaState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    mappedFetchMateriaById: materiaId => dispatch(materiaActions.fetchMateriaById(materiaId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Materia);
