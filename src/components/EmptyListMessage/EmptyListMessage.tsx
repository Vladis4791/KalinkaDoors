import React from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import "./EmptylistMessage.scss";

const EmptyListMessage = ({
	emptyListMessageContent,
    isHidden
}: {
	emptyListMessageContent?: React.ReactNode;
    isHidden: boolean
}) => {
	return (
		<div className={`EmptyListMessage ${isHidden ? "hidden" : ""}`}>
			<div className="messageContent">
                { emptyListMessageContent }
			</div>
		</div>
	);
};

export default EmptyListMessage;
