import React from "react"

import {GET_DATA} from "./types"

const initialState = {
	data: [],
};

export const cardReducer = (state = initialState, action) => {

	console.log(state, action)
	switch (action.type) {
		case GET_DATA:
			return {
				...state,
				data: [...action.data]
			}

		default: return state;
	}


}