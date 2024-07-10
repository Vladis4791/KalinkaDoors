import React, { useEffect, useState } from "react";
import QuestionTemplate from "../../components/QuestionTemplate/QuestionTemplate";
import { Door } from "../../interfaces/Door.interface";
import { doorsAPI } from "../../APIs/doors.api";
import Checkbox from "../../components/Checkbox/Checkbox";
import "./DoorstepSettings.scss";
import CheckboxGroup from "../../components/CheckboxGroup/CheckboxGroup";

const DoorstepSettings = () => {
	const [doors, setDoors] = useState<Door[]>([]);
	const [checkedDoorsIds, setCheckedDoorsIds] = useState<string[]>([]);

	useEffect(() => {
		setDoors(doorsAPI.getAllDoors());
	}, []);

	return (
		<QuestionTemplate
			questionName="Настройка порога"
			questionDescription="Выберите двери, для которых необходим порог"
            previousPageRoute="/doorsList"
            nextPageRoute="/fixationTypeSelection"
			onSubmit={() => {}}
		>
			<CheckboxGroup
				doors={doors}
                checkedDoorsIds={checkedDoorsIds}
				onChange={(checkedDoorsIds) => setCheckedDoorsIds(checkedDoorsIds)}
			/>
		</QuestionTemplate>
	);
};

export default DoorstepSettings;
