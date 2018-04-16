import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { materias: state.materias};
};

const ConnectedList = ({ materias }) => (
  <ul className="list-group list-group-flush">
    {materias.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.titulo}
      </li>
    ))}
  </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;
