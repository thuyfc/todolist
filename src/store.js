import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import { watchTodoSaga } from "./reducers/todosaga"; // sử dụng named export

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchTodoSaga); // sử dụng tên đã được export

export default store;
