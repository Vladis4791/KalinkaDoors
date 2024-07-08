import React, { useState } from "react";
import RadioButton from "../../components/RadioButton/RadioButton";
import QuestionTemplate from "../../components/QuestionTemplate/QuestionTemplate";

const MainFixationTypePage = () => {
	const [
		shouldBeOneFixationTypeOnObject,
		setOnShouldBeOneFixationTypeOnObject,
	] = useState(false);

	return (
		<QuestionTemplate
			questionName="Настройка типа фиксации"
            questionDescription="Выберите ваш случай"
			onSubmit={() => {}}
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
