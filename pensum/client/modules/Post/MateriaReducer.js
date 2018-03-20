import { GET_MATERIA } from './PostActions';

// Initial State
const initialState = { data: [] };

const MateriaReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MATERIA :
      return {
        data: action.materia
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all posts
export const getMaterias = state => state.materias.data;

// Get post by cuid
export const getMateria = (state, codigo) => state.materias.data.filter(materia => materia.codigo === codigo)[0];

// Export Reducer
export default MateriaReducer;
