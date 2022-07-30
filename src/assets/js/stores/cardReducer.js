import React from "react"

import {GET_DATA, INPUT_TEXT, SET_REGION} from "./types"

const initialState = {
	data: [],
	searchText: "",
	region: "All"
};

export const cardReducer = (state = initialState, action) => {

	console.log(state, action)
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
			}

		default: return state;
	}


}