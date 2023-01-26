import { applyMiddleware, combineReducers, compose, createStore, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import weatherReducer from "./reducer/weatherReducer";
import { ReduxDevTool } from "./Types/types";
import {composeWithDevTools} from "redux-devtools-extension"


declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}


const rootReducers = combineReducers({
    weather:weatherReducer
})

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(rootReducers,createComposer((applyMiddleware(thunk))))
