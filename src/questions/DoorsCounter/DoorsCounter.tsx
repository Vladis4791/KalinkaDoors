import React, { useState } from "react";
import QuestionTemplate from "../../components/QuestionTemplate/QuestionTemplate";
import NumberInput from "../../components/NumberInput/NumberInput";
import { Door, DoorWithComponents } from "../../interfaces/Door.interface";
import { DoorComponents } from "../../interfaces/DoorComponents.interface";
import { InputNumber } from "primereact/inputnumber";
import { useNavigate } from "react-router-dom";
import { doorsAPI } from "../../APIs/doors.api";



const DoorsCounter = () => {
	const [doorsCount, setDoorsCount] = useState(0);
	const navigate = useNavigate();

	const onSubmit = () => {
		doorsAPI.setupDoors(doorsCount);
        doorsAPI.SetupFixationTypeState();
	};

	return (
		<QuestionTemplate
			questionName="Введите количество дверей"
			onSubmit={onSubmit}
            nextPageRoute="/doorsList"
            previousPageRoute="/"
		>
			<NumberInput
				value={doorsCount}
				onChange={(value: number) => setDoorsCount(value)}
				min={1}
				max={20}
			/>
		</QuestionTemplate>
	);
};

export default DoorsCounter;
