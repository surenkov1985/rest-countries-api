import {THEME_TOGGLE} from "./types"

const initialState = {
	darkTheme: ""
};

export const themeReducer = (state = initialState, action) => {
	switch (action.type) {

		case THEME_TOGGLE:
			return {
				...state,
				darkTheme: action.darkTheme === "" ? "dark" : ""
			}

		default: return state

	}
}