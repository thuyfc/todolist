import {
  ADD_TODO_SUCCESS,
  UPDATE_TODO_SUCCESS,
  DELETE_TODO_SUCCESS,
  GET_TODO_LIST_SUCCESS,
  GET_TODO_LIST_START,
} from "../actions/action.js";

const initialState = {
  isLoading: false,
  todoList: [],
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todoList: [...state.todoList, action.payload],
      };
    case UPDATE_TODO_SUCCESS:
      const updatedTodoList = state.todoList.map((todo) =>
        todo.id === action.id ? { ...todo, ...action.payload } : todo
      );
      return {
        ...state,
        isLoading: false,

        todoList: updatedTodoList,
      };
    case DELETE_TODO_SUCCESS:
      const filteredTodoList = state.todoList.filter(
        (todo) => todo.id !== action.id
      );
      return {
        ...state,
        isLoading: false,

        todoList: filteredTodoList,
      };
    case GET_TODO_LIST_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TODO_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todoList: action.payload,
      };
    default:
      return state;
  }
}
