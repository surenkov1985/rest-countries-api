import {combineReducers} from "redux";

import {cardReducer} from "./cardReducer"
import {dropItemReducer} from "./dropListReducer"
import {setCountryReducer} from "./setCountryReducer"
import {themeReducer} from "./themeReducer"


export const rootReducer = combineReducers({
	cardReducer,
	dropItemReducer,
	setCountryReducer,
	themeReducer
});