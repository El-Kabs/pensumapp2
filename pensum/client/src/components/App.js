// Importar librerias
import React from 'react';
import {Navbar, Nav, NavItem, MenuItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggleAddMateria = this.toggleAddMateria.bind(this);
  }

  toggleAddMateria(e) {
    e.preventDefault();
    this.props.mappedToggleAddMateria();
  }

  render() {
    return (<div>
      <Navbar inverse="inverse" collapseOnSelect="collapseOnSelect" className="customNav">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/#">Mern Stack App</a>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to={{
                pathname: '/',
                query: {}
              }}>
              <NavItem eventKey={1}>Home</NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight="pullRight">
            <LinkContainer to={{
                pathname: '/',
                query: {}
              }} onClick={this.toggleAddMateria}>
              <NavItem eventKey={1}>Add Materia</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="container">
        {/* Each Smaller Components */}
        {this.props.children}
      </div>
    </div>);
  }
}
