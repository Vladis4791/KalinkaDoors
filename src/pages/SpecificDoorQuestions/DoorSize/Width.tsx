import React, { useState } from "react";
import QuestionTemplate from "../../../components/QuestionTemplate/QuestionTemplate";
import NumberInput from "../../../components/NumberInput/NumberInput";
import DoorSize from "./DoorSize";
import { useOutletContext } from "react-router-dom";
import { Door } from "../../../interfaces/Door.interface";
import { DoorState } from "../../../interfaces/DoorComponents.interface";

const Width = () => {
	const door = useOutletContext<Door>();

	const doorState = door?.doorInfo.currentState as DoorState;

	let questionName: string;
	let imageURL: string;
	let label: string;
    
	if (doorState === DoorState.DOOR_IS_SET) {
		questionName =
			"Померьте ширину дверного полотна";
		label = "Ширина дверного полотна";
		imageURL = "";
	} else {
        questionName =
			"Померьте ширину дверного проема";
		imageURL = "";
	}

    return (
		<DoorSize
			questionName={questionName}
			inputLabel={label}
			imageURL={imageURL}
			nextPageRoute="../width"
			previousPageRoute="../state"
			door={door}
			dimension="depth"
		/>
	);
};

export default Width;
