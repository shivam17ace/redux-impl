import { combineReducers } from "redux";
import Reducer from "./Reducer";
const Reducers=combineReducers({
    amount:Reducer
})
export default Reducers;