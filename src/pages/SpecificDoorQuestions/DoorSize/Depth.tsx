import React, { useState } from "react";
import DoorSize from "./DoorSize";
import { useOutletContext } from "react-router-dom";
import { Door } from "../../../interfaces/Door.interface";
import { DoorState } from "../../../interfaces/DoorComponents.interface";
import { doorsAPI } from "../../../APIs/doors.api";
import DoorListPreview from "../../../components/DoorListPreview/DoorListPreview";

const Depth = () => {

	const door = useOutletContext<Door>();

	const doorState = door?.doorInfo.currentState as DoorState;

	let questionName: string;
	let imageURL: string;
	const label = "Глубина дверного проема";
    
	if (doorState === DoorState.DOOR_IS_SET) {
		questionName =
			"Померьте глубину дверного проема (с добором и коробкой, без наличников)";
		
		imageURL = "";
	} else {
        questionName =
			"Померьте глубину дверного проема";
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

export default Depth;
