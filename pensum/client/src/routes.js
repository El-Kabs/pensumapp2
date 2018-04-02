// Importar librerias
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Materias from './containers/Materias';
import Materia from './containers/Materia';

export default (
  <Route path="/" component={App}>
     <Route component={Materias} />
     <Route path="/:codigo" component={Materia} />
  </Route>
)
