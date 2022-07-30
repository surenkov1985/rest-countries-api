import {SET_COUNTRY, SET_COUNTRY_ACTIVE} from "./types";

const initialState = {
	countryData: {},
	countriesActive: true
};

export const setCountryReducer = (state = initialState, action) => {

	switch (action.type) {
		case SET_COUNTRY:
			return {
				...state,
				countryData: {...action.data}
			};
		case SET_COUNTRY_ACTIVE:
			return {
				...state,
				countriesActive: action.active
			}
		default: return state
	}
};