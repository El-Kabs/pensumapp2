import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Import Style
import styles from './App.css';

// Import Components
import Helmet from 'react-helmet';
import DevTools from './components/DevTools';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Import Actions
import { toggleAddPost } from './AppActions';
import { switchLanguage } from '../../modules/Intl/IntlActions';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.setState({isMounted: true}); // eslint-disable-line
  }

  toggleAddPostSection = () => {
    this.props.dispatch(toggleAddPost());
  };

  render() {
    var texto = "";
    return (
      <div>
        {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />}
        <div>
          <Helmet
            title="MERN Starter - Blog App"
            titleTemplate="%s - Blog App"
            meta={[
              { charset: 'utf-8' },
              {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge',
              },
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
              },
            ]}
          />

          <Header
            switchLanguage={lang => this.props.dispatch(switchLanguage(lang))}
            intl={this.props.intl}
            toggleAddPost={this.toggleAddPostSection}
          />
          <div className={styles.container}>
            {this.props.children}
            <div className = {styles.envios}>
                <input placeholder = 'Primer Semestre' className = 'Primero'/>
                <button>Enviar</button>
                <input placeholder = 'Segundo Semestre' className = 'Segundo'/>
                <button>Enviar</button>
                <input placeholder = 'Tercer Semestre' className = 'Tercer'/>
                <button>Enviar</button>
                <input placeholder = 'Cuarto Semestre' className = 'Cuarto'/>
                <button>Enviar</button>
                <input placeholder = 'Quinto Semestre' className = 'Quinto'/>
                <button>Enviar</button>
                <input placeholder = 'Sexto Semestre' className = 'Sexto'/>
                <button>Enviar</button>
                <input placeholder = 'Septimo Semestre' className = 'Septimo'/>
                <button>Enviar</button>
                <input placeholder = 'Octavo Semestre' className = 'Octavo'/>
                <button>Enviar</button>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl,
  };
}

export default connect(mapStateToProps)(App);
