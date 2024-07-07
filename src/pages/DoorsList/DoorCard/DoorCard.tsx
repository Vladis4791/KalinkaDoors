import React from "react";
import ChangeableTitle from "./ChangeableTitle/ChangeableTitle";
import SecondaryButton from "../../../components/SecondaryButton/SecondaryButton";
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
			<ChangeableTitle
				onSubmit={onTitleChange}
				title={door.name}
			/>
			<SecondaryLink
				to={""}
				className="doorCardButton"
				title="Посмотреть комплектующие"
			/>
			<PrimaryLink
                to={`/settings/${door.id}/type`}
				className="doorCardButton"
				title="Настроить дверь"
			/>
		</div>
	);
};

export default DoorCard;
