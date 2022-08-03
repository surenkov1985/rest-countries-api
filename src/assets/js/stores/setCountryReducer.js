import {SET_COUNTRY, SET_COUNTRY_ACTIVE, SET_BORDER} from "./types";

const initialState = {
	countryData: []
};

export const setCountryReducer = (state = initialState, action) => {

	switch (action.type) {
		case SET_COUNTRY:
			return {
				...state,
				countryData: [...state.countryData, action.data]
			};
		case SET_COUNTRY_ACTIVE:

			const newCountryData = [...state.countryData]

			if (state.countryData.length) {
				newCountryData.pop()
			}

			return {
				...state,
				countryData: [...newCountryData]
			};
		case SET_BORDER:
			return {
				...state,
				countryData: [...state.countryData, action.borderData]
			};
		default: return state
	}
};