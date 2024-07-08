import React from "react";
import DoorCardHeader from "./DoorCardHeader/DoorCardHeader";
import { Door } from "../../../interfaces/Door.interface";
import "./DoorCard.scss";
import PrimaryLink from "../../../components/PrimaryLink/PrimaryLink";
import SecondaryLink from "../../../components/SecondaryLink/SecondaryLink";

const DoorCard = ({
	door,
	onTitleChange,
}: {
	door: Door;
	onTitleChange: (newTitle: string) => void;
}) => {
	return (
		<div className="DoorCard">
			<DoorCardHeader onSubmit={onTitleChange} title={door.name} />
			<SecondaryLink to={""} className="doorCardButton">
				Посмотреть комплектующие
			</SecondaryLink>
			<PrimaryLink
				to={`/settings/${door.id}/type`}
				className="doorCardButton"
			>
				Настроить дверь
			</PrimaryLink>
		</div>
	);
};

export default DoorCard;
