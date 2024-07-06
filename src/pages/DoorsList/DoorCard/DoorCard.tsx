import React, { useState } from "react";
import ChangeableTitle from "./ChangeableTitle/ChangeableTitle";
import SecondaryButton from "../../../components/SecondaryButton/SecondaryButton";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import { Door } from "../../../interfaces/Door.interface";
import { useNavigate } from "react-router-dom";
import "./DoorCard.scss";

const DoorCard = ({
	door,
	onTitleChange,
}: {
	door: Door;
	onTitleChange: (newTitle: string) => void;
}) => {
	const navigate = useNavigate();

	// const goToComponentsSettings = () => navigate(`settings/${door.id}`);

	const goToDoorSettings = () => navigate(`/settings/${door.id}/type`);

	return (
		<div className="DoorCard">
			<ChangeableTitle
				onSubmit={onTitleChange}
				title={door.name}
			/>
			<SecondaryButton
				onClick={() => {}}
				className="doorCardButton"
				title="Посмотреть комплектующие"
			/>
			<PrimaryButton
				onClick={goToDoorSettings}
				className="doorCardButton"
				title="Настроить дверь"
			/>
		</div>
	);
};

export default DoorCard;
