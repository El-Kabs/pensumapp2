const INITIAL_STATE = {
  showAddMateria: false
}

const appReducer = (currentState = INITIAL_STATE, action) => {
  switch(action.type){
    case 'TOGGLE_ADD_MATERIA':
    return{
      ...currentState, showAddMateria: !currentState.showAddMateria
    }

  default:
    return currentState;
  }
}

export default appReducer;
