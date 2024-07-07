import React from "react";
import "./Loading.scss";

const Loading = () => {
	return (
		<div className="loadingWrapper">
			<div className="lds-ripple">
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default Loading;
