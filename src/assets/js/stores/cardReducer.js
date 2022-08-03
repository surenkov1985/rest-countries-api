import React from "react"

import {GET_DATA, INPUT_TEXT, SET_REGION, SET_BORDER} from "./types"

const initialState = {
	data: [],
	searchText: "",
	borderData: {},
	region: "All",
	borderActive: false
};

export const cardReducer = (state = initialState, action) => {

	switch (action.type) {
		case GET_DATA:
			return {
				...state,
				data: [...action.data]
			};
		case INPUT_TEXT:
			return {
				...state,
				searchText: action.searchText
			};
		case SET_REGION:
			return {
				...state,
				region: action.region
			};

		default: return state;
	}


}