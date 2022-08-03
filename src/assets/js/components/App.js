import React, { useEffect, useState } from "react"
import {useSelector, useDispatch} from "react-redux";
import { getData, activeDropMenu, onInputText, setCountry, setRegion, themeToggle } from "../stores/actions"

import CardList from "./CardList/CardList";
import DropList from "./dropList/DropList";
import SearchInput from "./searchInput/SearchInput"
import Button from "./button/Button"
import Country from "./country/Country"

const App = function () {

	const dispatch = useDispatch();
	const [regionText, setRegionText] = useState("Filter by Region");
	const [dropActive, setDropActive] = useState(false);

	useEffect(() => {

		dispatch(getData());
	}, []);

	let region = useSelector((state) => {

		const {cardReducer} = state;
		return cardReducer.region
	});

	let searchVal = useSelector((state) => {

		const {cardReducer} = state;
		return cardReducer.searchText
	});

	let data = useSelector((state) => {

		const {cardReducer} = state;
		return cardReducer.data
	});

	let dropClass = useSelector((state) => {

		const {dropItemReducer} = state;
		return dropItemReducer.className
	});

	let countryData = useSelector((state) => {

		const {setCountryReducer} = state;
		return setCountryReducer.countryData;
	});

	let theme = useSelector((state) => {

		const {themeReducer} = state;
		return themeReducer.darkTheme
	});

	useEffect(() => {

		document.body.classList = theme
	}, [theme]);

	const themeControl = {
		btnClassName: "container__theme",
		textClassName: "container__theme-text",
		text: "Dark Mode",
		icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="var(--ci-primary-color, currentColor)" d="M268.279,496c-67.574,0-130.978-26.191-178.534-73.745S16,311.293,16,243.718A252.252,252.252,0,0,1,154.183,18.676a24.44,24.44,0,0,1,34.46,28.958,220.12,220.12,0,0,0,54.8,220.923A218.746,218.746,0,0,0,399.085,333.2h0a220.2,220.2,0,0,0,65.277-9.846,24.439,24.439,0,0,1,28.959,34.461A252.256,252.256,0,0,1,268.279,496ZM153.31,55.781A219.3,219.3,0,0,0,48,243.718C48,365.181,146.816,464,268.279,464a219.3,219.3,0,0,0,187.938-105.31,252.912,252.912,0,0,1-57.13,6.513h0a250.539,250.539,0,0,1-178.268-74.016,252.147,252.147,0,0,1-67.509-235.4Z" className="ci-primary"/></svg>,
		onclick: darkThemeToggle
	};

	const regionControl = {
		btnClassName: "content__category",
		textClassName: "content__category-text",
		text: regionText,
		icon: <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" enableBackground="new 0 0 129 129"><g><path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"/></g></svg>,
		onclick: dropListActivate
	};

	function countryChoise(obj) {

		dispatch(setCountry(obj));
	}

	function setRegions (val) {

		dispatch(setRegion(val));
		setRegionText(val);
		dropListActivate()
	}

	function dropListActivate() {

		dispatch(activeDropMenu(dropActive));
		setDropActive(!dropActive);
	}

	function onInput(e) {

		dispatch(onInputText(e.target.value))
	}

	function darkThemeToggle() {

		dispatch(themeToggle(theme));
	}

	return (
		<div id="container" className="container">
			<header className="container__header header">
				<div className="header__content">
					<h1 className="container__title">Where in the World?</h1>
					<Button props={themeControl}/>
				</div>
			</header>
			<main className="container__content content">
				{!countryData.length ?
					<div className="content__countries">
						<div className="content__control">
							<SearchInput onChange={onInput} val={searchVal}/>
							<div className="content__dropdown">
								<Button props={regionControl}/>
								<div className={["content__dropdown-list", dropClass].join(" ")}>
									<DropList data={data} setRegion={setRegions}/>
								</div>
							</div>
						</div>
						<CardList data={data} region={region} searchVal={searchVal} onClick={countryChoise}/>
					</div> :
					<Country data={data} countryData={countryData[countryData.length - 1]}/>
				}
			</main>
		</div>
	)
};

export default App