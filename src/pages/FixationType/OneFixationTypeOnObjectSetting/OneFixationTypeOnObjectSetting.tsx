import React, { useEffect, useState } from "react";
import QuestionTemplate from "../../../components/QuestionTemplate/QuestionTemplate";
import RadioButton from "../../../components/RadioButton/RadioButton";
import { FixationType } from "../../../interfaces/DoorComponents.interface";
import { useDoors } from "../../../hooks/useDoors";
import { fixationTypesStateAPI } from "../../../APIs/fixationTypesState.api";
import { Door } from "../../../interfaces/Door.interface";

const OneFixationTypeOnObjectSetting = () => {
	const { oneFixationTypeOnObject } = fixationTypesStateAPI.getFixationTypeState();
	const { doors, updateDoors } = useDoors();

	const [currentFixationType, setCurrentFixationType] = useState<FixationType>(oneFixationTypeOnObject);

	const onSubmit = () => {
		const newDoors = doors.map((door) => {
			door.components.fixationType = currentFixationType;
			return door;
		});

		updateDoors(newDoors);
	};

	return (
		<QuestionTemplate
			questionName="Настройка типа фиксации на всем объекте"
			questionDescription="Выберите двери для всего объекта"
			previousPageRoute="/fixationTypeSelection"
			nextPageRoute="/doorsWithLockingSelection"
			onSubmit={onSubmit}
		>
			<>
				<RadioButton
					radioButtonName="Язычок"
					groupName="fixationTypeOnObject"
					checked={currentFixationType === FixationType.TONGUE}
					onChange={() => setCurrentFixationType(FixationType.TONGUE)}
				/>
				<RadioButton
					radioButtonName="Магнит"
					groupName="fixationTypeOnObject"
					checked={currentFixationType === FixationType.MAGNIT}
					onChange={() => setCurrentFixationType(FixationType.MAGNIT)}
				/>
			</>
		</QuestionTemplate>
	);
};

export default OneFixationTypeOnObjectSetting;
