import { ADD_MATERIA } from '../constants/action-types';

const initialState = {
  materias: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MATERIA:
      return {
        ...state, materias: [...state.materias, action.payload]
      };
    default:
      return state;
  }
};

export default rootReducer;
