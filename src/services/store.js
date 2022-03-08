import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import Reducers from "./Reducer/Index";
export const store = createStore(Reducers,{},applyMiddleware(thunk));