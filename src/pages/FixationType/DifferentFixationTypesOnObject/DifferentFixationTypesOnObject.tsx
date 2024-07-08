import React, { useEffect, useState } from "react";

import { doorsAPI } from "../../../APIs/doors.api";
import { Door } from "../../../interfaces/Door.interface";
import QuestionTemplate from "../../../components/QuestionTemplate/QuestionTemplate";
import CheckboxGroup from "../../../components/CheckboxGroup/CheckboxGroup";
import Select from "../../../components/Select/Select";
import SelectBlock from "../../../components/SelectBlock/SelectBlock";

const DifferentFixationTypesOnObject = () => {
	const [doors, setDoors] = useState<Door[]>([]);
	const [checkedDoorsIds, setCheckedDoorsIds] = useState<string[]>([]);
	const [doorsWithTongue, setDoorsWithTongue] = useState<string[]>([]);
	const [doorsWithMagnit, setDoorsWithMagnit] = useState<string[]>([]);
	const [fixationType, setFixationType] = useState("");

	useEffect(() => {
		setDoors(doorsAPI.getAllDoors());
	}, []);

	return (
		<QuestionTemplate
			questionName="Настройка типа фиксации"
			questionDescription="Выберите двери из списка и установить для них тип фиксации"
			onSubmit={() => {}}
		>
			<CheckboxGroup
				doors={doors}
				onChange={(checkedDoorsIds) =>
					setCheckedDoorsIds(checkedDoorsIds)
				}
			/>
            <div className="selectInput">
                
            </div>

            
			<SelectBlock
				options={["Язычок", "Магнит"]}
				value={fixationType}
                selectLabel="Запирание"
				onChange={(option) => setFixationType(option)}
			/>
		</QuestionTemplate>
	);
};

export default DifferentFixationTypesOnObject;
