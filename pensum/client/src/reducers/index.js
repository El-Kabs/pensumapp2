// Importar librerias
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import appReducer from './appReducer';
import {materiaReducer} from './materiaReducer';

export default combineReducers({
  appState:appReducer,
  materiaState:materiaReducer,
  routing
})
