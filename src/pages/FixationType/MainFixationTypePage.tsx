import React, { useRef, useState } from "react";
import RadioButton from "../../components/RadioButton/RadioButton";
import QuestionTemplate from "../../components/QuestionTemplate/QuestionTemplate";
import { fixationTypesStateAPI } from "../../APIs/fixationTypesState.api";

const MainFixationTypePage = () => {
	const initialShouldBeOneFixationTypeOnObject =
		fixationTypesStateAPI.getFixationTypeState().oneFixationTypeOnObject;

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
            fixationTypesStateAPI.resetDoorsIds();
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
					radioButtonName="Один тип запирания на весь объект"
					groupName="fixationTypesOnObject"
					checked={shouldBeOneFixationTypeOnObject}
					onChange={() =>
						setOnShouldBeOneFixationTypeOnObject(
							(prev) => !prev
						)
					}
				/>
				<RadioButton
					radioButtonName="Разные типы запирания"
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
