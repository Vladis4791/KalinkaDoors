import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { Door } from "../../interfaces/Door.interface";
import { doorsAPI } from "../../APIs/doors.api";

const CurrentDoorSettings = () => {
	const [currentDoor, setCurrentDoor] = useState<Door>(null);
	const { doorId } = useParams();

	useEffect(() => {
		console.log("here", doorId);
		const door = doorsAPI.getDoorById(doorId) as Door;
		console.log(door);
		if (!door) {
			// TODO create a page this door doesn't exist and navigate to there
		} else {
			setCurrentDoor(door);
		}
	}, [doorId]);

	return <Outlet context={currentDoor} />;
};

export default CurrentDoorSettings;
