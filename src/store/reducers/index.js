import { combineReducers } from "redux";
import { auth } from "./auth-reducer";
import { layout } from "./layout-reducer";

const rootReducer = combineReducers({
    auth,
    layout
})
export default rootReducer;