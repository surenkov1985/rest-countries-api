import React from "react"
import "./card.scss"

export default function Card({flag, name, population, region, capital}) {

	let numb= Number(population).toLocaleString('en-Us')

	return (
		<article className="content__card card">
			<div className="card__img">
				<img src={flag} alt={name}/>
			</div>
			<div className="card__content">
				<h2 className="card__title">{name}</h2>
				<div className="card__desc">
					<span className="card__text">Population: </span>
					<span className="card__numb">{numb}</span>
				</div>
				<div className="card__desc">
					<span className="card__text">Region: </span>
					<span className="card__numb">{region}</span>
				</div>
				<div className="card__desc">
					<span className="card__text">Capital: </span>
					<span className="card__numb">{capital}</span>
				</div>
			</div>
		</article>
	)
};
