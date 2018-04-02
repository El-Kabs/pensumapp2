// Importar librerias
import { connect } from 'react-redux';
import * as appActions from '../actions/appActions';
import App from '../components/App';
import * as materiaActions from '../actions/materiaActions';

const mapStateToProps = (state) => {
  return {
    mappedAppState: state.appState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    mappedToggleAddMateria: () => dispatch (appActions.toggleAddMateria()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
