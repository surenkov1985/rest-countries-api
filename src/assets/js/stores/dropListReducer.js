import React from "react"

import {DROP_ITEM} from "./types";

const initialState = {
	className: ""
};

export const dropItemReducer = (state = initialState, action) => {

	switch (action.type) {

		case DROP_ITEM:
			return {

				...state,
				className: state.className = action.active ? "" : "active"
			};

		default: return state;
	}
};