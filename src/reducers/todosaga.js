import { put, call, takeLatest } from "redux-saga/effects";
import {
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  GET_TODO_LIST,
  addTodoSuccess,
  updateTodoSuccess,
  deleteTodoSuccess,
  getTodoListSuccess,
  getTodoListStart,
} from "../actions/action.js";

const apiUrl = "https://6430bc6ed4518cfb0e546b5e.mockapi.io/api/v1/list";

function* addTodoSaga(action) {
  try {
    const response = yield call(fetch, apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: action.payload }),
    });
    const newTodo = yield response.json();

    yield put(addTodoSuccess(newTodo));
  } catch (error) {
    console.log(error);
  }
}

function* updateTodoSaga(action) {
  try {
    yield call(fetch, `${apiUrl}/${action.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: action.payload }),
    });

    yield put(updateTodoSuccess(action.id, action.payload));
  } catch (error) {
    console.log(error);
  }
}

function* deleteTodoSaga(action) {
  try {
    yield call(fetch, `${apiUrl}/${action.id}`, {
      method: "DELETE",
    });

    yield put(deleteTodoSuccess(action.id));
    console.log("1111");

    yield call(getTodoListSaga);
  } catch (error) {
    console.log(error);
  }
}

function* getTodoListSaga() {
  try {
    yield put(getTodoListStart());

    const response = yield call(fetch, apiUrl);
    const todoList = yield response.json();

    yield put(getTodoListSuccess(todoList));
  } catch (error) {
    console.log(error);
  }
}

export function* watchTodoSaga() {
  yield takeLatest(ADD_TODO, addTodoSaga);
  yield takeLatest(UPDATE_TODO, updateTodoSaga);
  yield takeLatest(DELETE_TODO, deleteTodoSaga);
  yield takeLatest(GET_TODO_LIST, getTodoListSaga);
}
