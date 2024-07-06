import React, { useState } from "react";
import QuestionTemplate from "../../components/QuestionTemplate/QuestionTemplate";
import NumberInput from "../../components/NumberInput/NumberInput";
import { Door, DoorWithComponents } from "../../interfaces/Door.interface";
import { DoorComponents } from "../../interfaces/DoorComponents.interface";
import { InputNumber } from 'primereact/inputnumber';
import { useNavigate } from "react-router-dom";


const createDoorsWithComponentsInstances = (doorsCount: number) => {
	const doors = [];

	for (let i = 0; i < doorsCount; i++) {
		const currentDoor = createDoorWithComponentsInstance(i + 1);
		doors.push(currentDoor);
	}

    return doors;
};

const createDoorWithComponentsInstance = (doorId: number) => {
	const door = {} as DoorWithComponents;
	door.name = `Дверь ${doorId}`;
	door.id = doorId.toString();
	door.components = {} as DoorComponents;

	return door;
};

const DoorsCounter = () => {
	const [doorsCount, setDoorsCount] = useState(0);
    const navigate = useNavigate();

	const onSubmit = () => {

        const doors = createDoorsWithComponentsInstances(doorsCount);
		localStorage.setItem("doors", JSON.stringify(doors));
        navigate("/doorsList");
	};

	return (
		<QuestionTemplate
			questionName="Введите количество дверей"
			onSubmit={onSubmit}
		>
			<InputNumber value={doorsCount} onValueChange={(e) => setDoorsCount(e.value)} />
		</QuestionTemplate>
	);
};

export default DoorsCounter;
