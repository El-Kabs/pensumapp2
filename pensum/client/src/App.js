// Importar librerias
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import configureStore from './store/configureStore';
import createHistory from 'history/createBrowserHistory'
import routes from './routes';

// Traer la configuracion de la store

// Traer la historia
const history = createHistory();
const middleware = routerMiddleware(history);

let store = configureStore();

// Clase que renderiza el front
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Router history={history} routes={routes} />
        </div>
      </Provider>
    );
  }
}

// Props de la aplicacion. Valida la información.
App.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default App;
