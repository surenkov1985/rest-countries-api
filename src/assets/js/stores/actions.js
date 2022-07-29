import { GET_DATA, DROP_ITEM } from "./types"


export const getData = () => {
	return async(dispatch) => {

		const response = await fetch("https://restcountries.com/v2/all");

		const json = await response.json();
		console.log(json)
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