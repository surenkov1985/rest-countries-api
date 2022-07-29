import React, {useState, useEffect} from "react"

export default function DropList({data, setRegion}) {

	let regions = ["All"];
	const [regionsArr, setRegionsArr] = useState([]);

	useEffect(() => {

		data.map((item) => {

			if (!regions.includes(item.region)) {

				regions.push(item.region)
			}
		});

		setRegionsArr(regions);
	}, [data]);

	return (
		<ul className="content__region-list">
			{regionsArr.map((region, index) => {
				return (
					<li className="content__region-item" key={index} onClick={() => {setRegion(region)}}>{region}</li>
				)
			})}

		</ul>
	)
}