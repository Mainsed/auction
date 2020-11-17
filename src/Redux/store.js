import {combineReducers, createStore} from "redux";
import createLotReducer from "./createLotReducer";
import findLotsReducer from "./findLotsReducer";
import logInReducer from "./logInReducer";
import lotPageReducer from "./lotPageReducer";
import profileReducer from "./profileReducer";


let reducers = combineReducers({
    createLotReducer, findLotsReducer, logInReducer, lotPageReducer, profileReducer
})

const store = createStore(reducers);

window.store = store;

export default store;