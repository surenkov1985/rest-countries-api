import React, {useState, useEffect} from "react"
import Card from "../card/Card"

export default function CardList({data, region}) {

	const [cardsData, setCardsData] = useState(data);

	useEffect(() => {

		setCardsData(data.filter((item) => {

			if (region === "All") {

				return item
			} else {

				return item.region === region
			}
		}))
	}, [region,data]);

	return (
		<div className="content__cards">
			{cardsData.map((item) => {

				return (
					<Card
						key={item.name}
					    flag={item.flags.png}
					    name={item.name}
						population={item.population}
					    region={item.region}
						capital={item.capital}
					/>
				)
			})}

		</div>
	)
}