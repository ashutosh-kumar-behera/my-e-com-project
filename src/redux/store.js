import { createStore } from "redux";

const domyReducer=()=>{
    return 100;
} 

const store = createStore(domyReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store