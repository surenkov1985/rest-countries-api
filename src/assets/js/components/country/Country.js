import "./country.scss"
import React, {useState} from "react"
import {useSelector, useDispatch} from "react-redux";
import { setCountryActivate } from "../../stores/actions"



import Button from "../button/Button"

export default function Country({data, countryData}) {

	const dispatch = useDispatch();

	let countriesActive = useSelector((state) => {

		const {setCountryReducer} = state;
		return setCountryReducer.countriesActive;
	});



	const backRegionControl = {
		btnClassName: "content__back-country",
		textClassName: "content__back-text",
		text: "Back",
		icon: <svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 12 12"><path fill="none" stroke="currentColor" strokeLinecap="round" d="M4 3L.9 6.1c-.2.2-.2.5 0 .7L4 10M1 6.5h10.5"/></svg>,
		onclick: returnCountries
	};

	const [currencies, setCurrencies] = useState(setCurrency());
	const [languages, setlanguages] = useState([countryData.languages.map((item) => {return item.name})]);
	const [bordersCode, setBordersCode] = useState(setBorders());

	function setBorders() {

		const bordersArr = []

		if (countryData.borders) {countryData.borders.map((item) => {

				let border = data.find((count) => { return count.alpha3Code === item})

				bordersArr.push(border.name)


		});
		return bordersArr
	}}

	function setCurrency() {

		const currenciesArr = [];

		if (countryData.currencies) {countryData.currencies.map((item) => {

			currenciesArr.push(item.name)


		});
		return currenciesArr
	}}

	let numb= Number(countryData.population).toLocaleString('en-Us');

	function returnCountries() {

		dispatch(setCountryActivate(!countriesActive))
	}

	return (
		<>
			<div className="content__country-description">
				<div className="content__control">
					<Button props={backRegionControl}/>
				</div>


			</div>
			<div className="country">
				<div className="country__flag" style={{width: "43.5%",
					height: 0,
					paddingBottom: "31%",
					background: `url(${countryData.flag})`,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center"}}/>
				<div className="country__description">
					<h2 className="country__title">{countryData.name}</h2>
					<div className="country__desc">
						<div className="country__desc-list">
							<div className="country__item">
								<span className="country__desc-text">Native Name: </span>
								<span className="country__desc-val">{countryData.nativeName}</span>
							</div>
							<div className="country__item">
								<span className="country__desc-text">Population: </span>
								<span className="country__desc-val">{numb}</span>
							</div>
							<div className="country__item">
								<span className="country__desc-text">Region: </span>
								<span className="country__desc-val">{countryData.region}</span>
							</div>
							<div className="country__item">
								<span className="country__desc-text">Sub Region: </span>
								<span className="country__desc-val">{countryData.subregion}</span>
							</div>
							<div className="country__item">
								<span className="country__desc-text">Capital: </span>
								<span className="country__desc-val">{countryData.capital}</span>
							</div>
						</div>
						<div className="country__desc-list">
							<div className="country__item">
								<span className="country__desc-text">Top Level Domain: </span>
								<span className="country__desc-val">{countryData.topLevelDomain}</span>
							</div>
							<div className="country__item">
								<span className="country__desc-text">Currencies: </span>
								{currencies && <span className="country__desc-val">{currencies.join(", ")}</span>}
							</div>
							<div className="country__item">
								<span className="country__desc-text">Languages: </span>
								<span className="country__desc-val"> {languages.join(", ")}</span>
							</div>
						</div>
					</div>
					<div className="country__border">
						<div className="country__border-text">Border Countries: </div>
						{bordersCode && <ul className="country__border-list">
							{bordersCode.map((item, index) => {

								return (
									<li className="country__border-item" key={index}>{item}</li>
								)
							})}
						</ul>}
					</div>
				</div>
			</div>
		</>
	)
}