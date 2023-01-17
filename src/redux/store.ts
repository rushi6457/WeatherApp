import { applyMiddleware, combineReducers, compose, createStore, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import weatherReducer from "./reducer/weatherReducer";
import { ReduxDevTool } from "./Types/types";
import {composeWithDevTools} from "redux-devtools-extension"

const rootReducers = combineReducers({
    weather:weatherReducer
})

// const createComposer = composeWithDevTools() || compose;
export const store = legacy_createStore(rootReducers,composeWithDevTools((applyMiddleware(thunk))))
