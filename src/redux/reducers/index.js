import { combineReducers } from "redux";
import { demo } from "./demo-reducers";
const rootReducer = combineReducers({
    demo,
})
export default rootReducer;