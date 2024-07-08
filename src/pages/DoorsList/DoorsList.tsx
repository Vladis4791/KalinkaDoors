import React, { useEffect, useState } from "react";
import { Door } from "../../interfaces/Door.interface";
import { doorsAPI } from "../../APIs/doors.api";
import DoorCard from "./DoorCard/DoorCard";
import "./DoorsList.scss";
import SecondaryLink from "../../components/SecondaryLink/SecondaryLink";

const DoorsList = () => {
	const [doors, setDoors] = useState<Door[]>([]);

	useEffect(() => {
		setDoors(doorsAPI.getAllDoors());
		console.log(doorsAPI.getAllDoors());
	}, []);

	const onDoorTitleChange = (doorId: string, newTitle: string) => {
		const newDoors = structuredClone(doors);

		const doorWithChangedTitle = newDoors.find(
			(door) => door.id === doorId
		);
		doorWithChangedTitle.name = newTitle;
		setDoors(newDoors);
		localStorage.setItem("doors", JSON.stringify(newDoors));
	};

	return (
		<div className="DoorsList">
			<div className="container">
				<h2 className="doorListHeader">
					Список дверей ({doors.length})
				</h2>
				<div className="doorsListWrapper">
					{doors.map((door) => (
						<DoorCard
							key={door.id}
							door={door}
							onTitleChange={(newTitle) =>
								onDoorTitleChange(door.id, newTitle)
							}
						/>
					))}
				</div>

				<SecondaryLink to="/doorsteps">
					Подобрать доп. комплектующие
				</SecondaryLink>
			</div>
		</div>
	);
};

export default DoorsList;
