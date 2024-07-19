import React, { useRef, useState } from "react";
import QuestionTemplate from "../../components/QuestionTemplate/QuestionTemplate";
import RadioButton from "../../components/RadioButton/RadioButton";
import { lockingTypeStateAPI } from "../../APIs/lockingTypesState.api";

const MainLockingTypePage = () => {
	const initialShouldBeOneFixationTypeOnObject =
		lockingTypeStateAPI.getLockingTypeState().shouldBeOneLockingTypeOnObject;

	const previousInitialShouldBeOneFixationTypeOnObject = useRef(
		initialShouldBeOneFixationTypeOnObject
	);

	const [
		shouldBeOneLockingTypeOnObject,
		setOnShouldBeOneLockingTypeOnObject,
	] = useState(initialShouldBeOneFixationTypeOnObject);

	const onSubmit = () => {
		// if (
		// 	shouldBeOneLockingTypeOnObject !==
		// 	previousInitialShouldBeOneFixationTypeOnObject.current
		// ) {
		// 	lockingTypeStateAPI.resetDoorsIds();
		// }

		lockingTypeStateAPI.setShouldBeOneFixationTypeOnObject(
			shouldBeOneLockingTypeOnObject
		);
	};

	return (
		<QuestionTemplate
			questionName="Настройка типа фиксации"
			questionDescription="Выберите ваш случай"
			onSubmit={onSubmit}
			previousPageRoute="/doorsteps"
			nextPageRoute={
				shouldBeOneLockingTypeOnObject
					? "/oneLockingType"
					: "/differentLockingTypes"
			}
		>
			<>
				<RadioButton
					radioButtonName="Один тип запирания на весь объект"
					groupName="lockingTypesOnObject"
					checked={shouldBeOneLockingTypeOnObject}
					onChange={() =>
						setOnShouldBeOneLockingTypeOnObject(
							(prev) => !prev
						)
					}
				/>
				<RadioButton
					radioButtonName="Разные типы запирания"
					groupName="lockingTypesOnObject"
					checked={!shouldBeOneLockingTypeOnObject}
					onChange={() =>
						setOnShouldBeOneLockingTypeOnObject(
							(prev) => !prev
						)
					}
				/>
			</>
		</QuestionTemplate>
	);
};

export default MainLockingTypePage;
