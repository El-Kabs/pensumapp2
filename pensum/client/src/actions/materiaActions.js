// URL de la API
const apiUrl = '/api/';

// No se que hace esto xd
export const toggleAddMateria = () => {
  return {
    rype: 'TOOGLE_ADD_MATERIA'
  }
}

export const addNewMateria = (materia) => {
}
export const editMateria = (materia) => {
}

export const fetchMaterias = () => {
  return (dispatch) => {
    dispatch(fetchMateriasRequest());
    return fetch(apiUrl).then(response => {
      if(response.ok){
        response.json().then(data => {
          dispatch(fetchMateriasSuccess(data.materias, data.message));
        })
      }
      else{
        response.json().then(error => {
          dispatch(fetchMateriasFailed(error));
        })
      }
    })
  }
}

export const fetchMateriasRequest = () => {
  return {
    type: 'FETCH_MATERIAS_REQUEST'
  }
}

export const fetchMateriasSuccess = (materias, message) => {
  return {
    type: 'FETCH_MATERIAS_SUCCESS',
    materias: materias,
    message: message,
    receivedAt: Date.now
  }
}

export const fetchMateriasFailed = (error) => {
  return {
    type: 'FETCH_MATERIAS_FAILED',
    error
  }
}

export const fetchMateriaById = (materiaId) => {
  return (dispatch) => {
    dispatch(fetchMateriaRequest());
    return fetch(apiUrl+materiaId).then(response => {console.log(response)
    if(response.ok){
      response.json().then(data => {
        dispatch(fetchMateriaSuccess(data.materia[0], data.message));
      })
    }
    else{
      response.json().then(error => {
        dispatch(fetchMateriaFailed(error));
      })
    }
    })
  }
}

export const fetchMateriaRequest = () => {
  return {
    type: 'FETCH_MATERIAS_REQUEST'
  }
}

export const fetchMateriaSuccess = (materia, message) => {
  return {
    type: 'FETCH_MATERIA_SUCCESS',
    materia: materia,
    message: message,
    receivedAt: Date.now
  }
}

export const fetchMateriaFailed = (error) => {
  return {
    type: 'FETCH_MATERIA_FAILED',
    error
  }
}
