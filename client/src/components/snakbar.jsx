import React from "react";
import { useSnackbar } from "react-simple-snackbar";

export default function SomeChildComponent(props) {
	const options = {
		position: "bottom-right",
		style: {
			/* backgroundColor: "midnightblue",
			border: "2px solid lightgreen",
			color: "lightblue",
			fontFamily: "Menlo, monospace",
			fontSize: "20px",
			textAlign: "center", */
		},
		closeStyle: {
			/* color: "lightcoral",
			fontSize: "16px", */
		},
	};
	const [openSnackbar, closeSnackbar] = useSnackbar(options);

	return (
		<div>
			<button
				className="btn"
				onClick={() => openSnackbar("This is the content of the Snackbar.")}
			>
				{props.msg}
			</button>
		</div>
	);
}
