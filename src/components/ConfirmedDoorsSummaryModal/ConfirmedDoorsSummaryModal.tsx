import React from "react";
import ModalWithButton from "../ModalWithButton/ModalWithButton";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import ConfirmedDoorsSummary from "../ConfirmedDoorsSummary/ConfirmedDoorsSummary";
import { Door } from "../../interfaces/Door.interface";

const ConfirmedDoorsSummaryModal = ({
	listTitle,
	doorsInSummary,
	onDelete,
}: {
	listTitle: string;
	doorsInSummary: Door[];
	onDelete: (doorsIdsToRemove: string[]) => void;
}) => {

	return (
		<ModalWithButton
			renderButton={(onClick) => (
				<PrimaryButton onClick={onClick} title={`Посмотреть список (${listTitle})`} />
			)}
			renderModalContent={() => (
				<ConfirmedDoorsSummary
					header={`Двери с типом запирания "${listTitle}"`}
					doorsInSummary={doorsInSummary}
					onDelete={onDelete}
				/>
			)}
		/>
	);
};

export default ConfirmedDoorsSummaryModal;
