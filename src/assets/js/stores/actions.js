import { GET_DATA, DROP_ITEM, INPUT_TEXT, SET_COUNTRY, SET_COUNTRY_ACTIVE, SET_REGION, THEME_TOGGLE, SET_BORDER } from "./types"


export const getData = () => {
	return async(dispatch) => {

		const response = await fetch("https://restcountries.com/v2/all");

		const json = await response.json();
		dispatch(fetchData(json))
	}
};

export const fetchData = (data) => {

	return {
		type:GET_DATA,
		data
	}
};

export const activeDropMenu = (active) => {

	return {
		type: DROP_ITEM,
		active
	}

};

export const setRegion = (region) => {

	return {
		type: SET_REGION,
		region
	}
};

export const onInputText = (searchText) => {

	return {
		type: INPUT_TEXT,
		searchText
	}
};

export const setCountry = (data) => {

	return {
		type: SET_COUNTRY,
		data
	}
};

export const setBorder = (name, data) => {

	const border = data.find((res) => {
		return res.name === name
	});

	return {
		type: SET_BORDER,
		borderData: border
	}
};


export const setCountryActivate = () => {

	return {
		type: SET_COUNTRY_ACTIVE
	}
};

export const themeToggle = (darkTheme) => {

	return {
		type: THEME_TOGGLE,
		darkTheme
	}
};
