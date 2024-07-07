import React, { useEffect, useState } from "react";
import QuestionTemplate from "../../components/QuestionTemplate/QuestionTemplate";
import { Door } from "../../interfaces/Door.interface";
import { doorsAPI } from "../../APIs/doors.api";
import Checkbox from "../../components/Checkbox/Checkbox";

const DoorstepSettings = () => {
	const [doors, setDoors] = useState<Door[]>([]);
	const [checkedDoorsIds, setCheckedDoorsIds] = useState<string[]>([]);

	useEffect(() => {
		setDoors(doorsAPI.getAllDoors());
	}, []);

	const onChange = (id: string) => {
		const isInCheckedDoors = checkedDoorsIds.includes(id);
		if (isInCheckedDoors) {
			const arr = checkedDoorsIds.filter((doorId) => doorId !== id);
			setCheckedDoorsIds(arr);
		} else {
			const arr = [...checkedDoorsIds, id];
			setCheckedDoorsIds(arr);
		}
	};

	return (
		<QuestionTemplate
			questionName="Настройка порога"
			questionDescription="Выберите двери, дял которых необходим порог"
			onSubmit={() => {}}
		>
			{doors.map((door: Door) => (
				<Checkbox
					checked={checkedDoorsIds.includes(door.id)}
					onChange={() => onChange(door.id)}
                    checkboxContent={door.name}
				/>
			))}
		</QuestionTemplate>
	);
};

export default DoorstepSettings;
