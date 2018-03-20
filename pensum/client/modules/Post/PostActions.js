import callApi from '../../util/apiCaller';

// Export Constants
export const GET_MATERIA = 'ADD_MATERIA';

// Export Actions
export function addMateria(post) {
  return {
    type: ADD_MATERIA,
    post,
  };
}

export function addMateriaRequest(post) {
  return (dispatch) => {
    return callApi('posts', 'post', {
      post: {
        name: post.name,
        title: post.title,
        content: post.content,
      },
    }).then(res => dispatch(addPost(res.post)));
  };
}

export function addMaterias(posts) {
  return {
    type: ADD_POSTS,
    posts,
  };
}

export function fetchMaterias() {
  return (dispatch) => {
    return callApi('materias').then(res => {
      dispatch(addPosts(res.posts));
    });
  };
}

export function fetchMateria(codigo) {
  return (dispatch) => {
    return callApi(`materias/${codigo}`).then(res => dispatch(addPost(res.post)));
  };
}
