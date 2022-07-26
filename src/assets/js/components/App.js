import React from "react"

const App = function () {

	return (
		<div id="container" className="container">
			<header className="container__header">
				<h1 className="container__title">Where in the World?</h1>
				<button className="container__theme">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
						<path fill="var(--ci-primary-color, currentColor)" d="M268.279,496c-67.574,0-130.978-26.191-178.534-73.745S16,311.293,16,243.718A252.252,252.252,0,0,1,154.183,18.676a24.44,24.44,0,0,1,34.46,28.958,220.12,220.12,0,0,0,54.8,220.923A218.746,218.746,0,0,0,399.085,333.2h0a220.2,220.2,0,0,0,65.277-9.846,24.439,24.439,0,0,1,28.959,34.461A252.256,252.256,0,0,1,268.279,496ZM153.31,55.781A219.3,219.3,0,0,0,48,243.718C48,365.181,146.816,464,268.279,464a219.3,219.3,0,0,0,187.938-105.31,252.912,252.912,0,0,1-57.13,6.513h0a250.539,250.539,0,0,1-178.268-74.016,252.147,252.147,0,0,1-67.509-235.4Z" className="ci-primary"/>
					</svg>
					<span className="container__theme-text">Dark Mode</span>
				</button>
			</header>
			<main className="container__content content">
				<div className="content__control">
					<label htmlFor="" className="content__search-container">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3.624,15a8.03,8.03,0,0,0,10.619.659l5.318,5.318a1,1,0,0,0,1.414-1.414l-5.318-5.318A8.04,8.04,0,0,0,3.624,3.624,8.042,8.042,0,0,0,3.624,15Zm1.414-9.96a6.043,6.043,0,1,1-1.77,4.274A6,6,0,0,1,5.038,5.038Z"/></svg>
						<input type="search" className="content__search" placeholder="Search for a country..."/>
					</label>
					<div className="content__dropdown">
						<button className="content__category">
							<span className="content__category-text">Filter by Region</span>
							<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" enableBackground="new 0 0 129 129"><g><path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"/></g></svg>
						</button>
						<div className="content__dropdown-list">
							<ul className="content__region-list">
								<li className="content__region-item">Africa</li>
								<li className="content__region-item">America</li>
								<li className="content__region-item">Asia</li>
								<li className="content__region-item">Europe</li>
								<li className="content__region-item">Oceania</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="content__list">
					<ul className="content__cards">
						<li className="content__card card">
							<div className="card__img">
								<img src="/assets/img/germanyflag.png" alt="germanyflag"/>
							</div>
							<div className="card__content">
								<h2 className="card__title">Germany</h2>
								<div className="card__desc">
									<p className="card__text">Population:</p>
									<p className="card__numb">81,770,900</p>
								</div>
								<div className="card__desc">
									<p className="card__text">Region:</p>
									<p className="card__numb">Europe</p>
								</div>
								<div className="card__desc">
									<p className="card__text">Capital:</p>
									<p className="card__numb">Berlin</p>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</main>
		</div>
	)
}

export default App