import React from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import './EmptylistMessage.scss';

const EmptyListMessage = ({
	openResultListInModal,
}: {
	openResultListInModal: () => void;
}) => {
	return (
		<div className="EmptyListMessage">
			<div className="messageContent">
				<h3>Все двери настроены!</h3>
				<PrimaryButton
					title="Посмотреть список"
					onClick={openResultListInModal}
				/>
			</div>
		</div>
	);
};

export default EmptyListMessage;
