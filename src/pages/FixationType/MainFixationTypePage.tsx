import React, { useRef, useState } from "react";
import RadioButton from "../../components/RadioButton/RadioButton";
import QuestionTemplate from "../../components/QuestionTemplate/QuestionTemplate";
import { fixationTypesStateAPI } from "../../APIs/fixationTypesState.api";
import { useDoors } from "../../hooks/useDoors";
import { doorsAPI } from "../../APIs/doors.api";
import { LockingType } from "../../interfaces/DoorComponents.interface";

const MainFixationTypePage = () => {

    const { doors, updateDoors } = useDoors();

	const initialShouldBeOneFixationTypeOnObject =
		fixationTypesStateAPI.getFixationTypeState().shouldBeOneFixationTypeOnObject;

	const previousInitialShouldBeOneFixationTypeOnObject = useRef(
		initialShouldBeOneFixationTypeOnObject
	);

	const [
		shouldBeOneFixationTypeOnObject,
		setOnShouldBeOneFixationTypeOnObject,
	] = useState(initialShouldBeOneFixationTypeOnObject);


	const onSubmit = () => {
		if (
			shouldBeOneFixationTypeOnObject !==
			previousInitialShouldBeOneFixationTypeOnObject.current
		) {
            doorsAPI.resetDoorsComponentToInitialValue("fixationType", null);
        }
        
        fixationTypesStateAPI.setShouldBeOneFixationTypeOnObject(
            shouldBeOneFixationTypeOnObject
        );
	};

	return (
		<QuestionTemplate
			questionName="Настройка типа фиксации"
			questionDescription="Выберите ваш случай"
			onSubmit={onSubmit}
			previousPageRoute="/doorsteps"
			nextPageRoute={
				shouldBeOneFixationTypeOnObject
					? "/oneFixationType"
					: "/differentFixationTypes"
			}
		>
			<>
				<RadioButton
					radioButtonName="Один тип фиксации на весь объект"
					groupName="fixationTypesOnObject"
					checked={shouldBeOneFixationTypeOnObject}
					onChange={() =>
						setOnShouldBeOneFixationTypeOnObject(
							(prev) => !prev
						)
					}
				/>
				<RadioButton
					radioButtonName="Разные типы фиксации"
					groupName="fixationTypesOnObject"
					checked={!shouldBeOneFixationTypeOnObject}
					onChange={() =>
						setOnShouldBeOneFixationTypeOnObject(
							(prev) => !prev
						)
					}
				/>
			</>
		</QuestionTemplate>
	);
};

export default MainFixationTypePage;
