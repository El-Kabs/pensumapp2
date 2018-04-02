// Importar librerias
import React from 'react';

export default class Materia extends React.Component {
  componentDidMount(){
    this.props.mappedfetchMateriaById(this.props.params.codigo);
  }

  render(){
    const materiaState = this.props.mappedmateriaState;
    return(
      <div className="materiaDetail">
       <h2>Materia Detail</h2>
         {!materiaState.materia && materiaState.isFetching &&
           <div>
             <p>Cargando materia...</p>
           </div>
         }
       {materiaState.materia && !materiaState.isFetching &&
         <div>
           <h3>{materiaState.materia.materiaText}</h3>
           <p>{materiaState.materia.materiaDesc}</p>
         </div>
       }
      </div>
    );
  }

}
