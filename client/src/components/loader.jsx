import React from "react";
import "./loader.css";

export function Loader(props) {
	if (props.loader) {
		return (
			<div className="mdl-loader">
				<div className="mdl-loader-content">
					<div className="loader">Loading...</div>
				</div>
			</div>
		);
	}
	return null;
}
