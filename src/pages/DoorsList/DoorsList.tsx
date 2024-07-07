import React, { useEffect, useState } from "react";
import { Door } from "../../interfaces/Door.interface";
import { doorsAPI } from "../../APIs/doors.api";
import DoorCard from "./DoorCard/DoorCard";
import "./DoorsList.scss";
import SecondaryButton from "../../components/SecondaryButton/SecondaryButton";
import { useNavigate } from "react-router-dom";

const DoorsList = () => {
	const [doors, setDoors] = useState<Door[]>([]);
    const navigate = useNavigate();

	useEffect(() => {
		setDoors(doorsAPI.getAllDoors());
		console.log(doorsAPI.getAllDoors());
	}, []);

	const onDoorTitleChange = (doorId: string, newTitle: string) => {
		const newDoors = doors.map((door) => {
			return { ...door };
		});

		const doorWithChangedTitle = newDoors.find(
			(door) => door.id === doorId
		);
		doorWithChangedTitle.name = newTitle;
		setDoors(newDoors);
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

				<SecondaryButton
					onClick={() => {}}
					title="Подобрать доп. комплектующие"
				/>
			</div>
		</div>
	);
};

export default DoorsList;
