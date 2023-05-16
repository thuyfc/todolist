export const ADD_TODO = "ADD_TODO";
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const UPDATE_TODO = "UPDATE_TODO";
export const UPDATE_TODO_SUCCESS = "UPDATE_TODO_SUCCESS";
export const DELETE_TODO = "DELETE_TODO";
export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";
export const GET_TODO_LIST = "GET_TODO_LIST";
export const GET_TODO_LIST_START = "GET_TODO_LIST_START";
export const GET_TODO_LIST_SUCCESS = "GET_TODO_LIST_SUCCESS";

export const addTodo = (data) => {
  return {
    type: ADD_TODO,
    payload: {
      ...data,
    },
  };
};

export const addTodoSuccess = (data) => {
  return {
    type: ADD_TODO_SUCCESS,
    payload: data,
  };
};

export const updateTodo = (id, data) => {
  return {
    type: UPDATE_TODO,
    id,
    payload: data,
  };
};

export const updateTodoSuccess = (id, data) => {
  return {
    type: UPDATE_TODO_SUCCESS,
    id,
    payload: data,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

export const deleteTodoSuccess = (id) => {
  return {
    type: DELETE_TODO_SUCCESS,
    id,
  };
};

export const getTodoList = () => {
  return {
    type: GET_TODO_LIST,
  };
};

export const getTodoListStart = () => {
  return {
    type: GET_TODO_LIST_START,
  };
};

export const getTodoListSuccess = (data) => {
  return {
    type: GET_TODO_LIST_SUCCESS,
    payload: data,
  };
};
