// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import createSagaMiddleware from "@redux-saga/core";
import productSaga from "./productSaga";

// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const SagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer:rootReducer,
    middleware:()=>[SagaMiddleware]
});

SagaMiddleware.run(productSaga)
export default store