import {combineReducers} from "redux";

import {cardReducer} from "./cardReducer"
import {dropItemReducer} from "./dropListReducer"


export const rootReducer = combineReducers({
	cardReducer,
	dropItemReducer
});