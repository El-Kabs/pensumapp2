const INITIAL_STATE = {
  materia: [],
  materia: null,
  isFetching: false,
  error: null,
  successMsg: null,
  showEditModal: false,
  materiaToEdit: null
}

export const materiaReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_MATERIAS_REQUEST':
      return {
        ...currentState,
        materias: [],
        materia: null,
        isFetching: true,
        error: null,
        successMsg: null,
        showEditModal: false,
        materiaToEdit: null
      }
    case 'FETCH_MATERIAS_SUCCESS':
      return {
        ...currentState,
        materias: action.materias,
        materia: null,
        isFetching: false,
        error: null,
        successMsg: action.message,
        showEditModal: false,
        materiaToEdit: null
      }
    case 'FETCH_MATERIAS_FAILED':
      return {
        ...currentState,
        materias: [],
        materia: null,
        isFetching: false,
        error: action.error,
        successMsg: null,
        showEditModal: false,
        materiaToEdit: null
      }
    case 'FETCH_MATERIA_REQUEST':
      return {
        ...currentState,
        materias: currentState.materias,
        materia: null,
        isFetching: true,
        error: null,
        successMsg: null,
        showEditModal: false,
        materiaToEdit: null
      }
    case 'FETCH_MATERIA_SUCCESS':
      return {
        ...currentState,
        materias: currentState.materias,
        materia: action.materia,
        isFetching: false,
        error: null,
        successMsg: action.message,
        showEditModal: false,
        materiaToEdit: null
      }
    case 'FETCH_MATERIA_FAILED':
      return {
        ...currentState,
        materias: [],
        materia: null,
        isFetching: false,
        error: action.error,
        successMsg: null,
        showEditModal: false,
        materiaToEdit: null
      }
    default:
      return currentState;
  }
}
