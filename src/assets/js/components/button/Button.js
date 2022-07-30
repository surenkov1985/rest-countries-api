import React from "react"

export default function Button({props}) {


	return (
		<button className={props.btnClassName} onClick={props.onclick}>
			{props.icon}
			<span className={props.textClassName}>{props.text}</span>
		</button>
	)
}