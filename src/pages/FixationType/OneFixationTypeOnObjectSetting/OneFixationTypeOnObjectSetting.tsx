import React, { useState } from "react";
import QuestionTemplate from "../../../components/QuestionTemplate/QuestionTemplate";
import RadioButton from "../../../components/RadioButton/RadioButton";
import { FixationType } from "../../../interfaces/DoorComponents.interface";

const OneFixationTypeOnObjectSetting = () => {
	const [currentFixationType, setCurrentFixationType] =
		useState<FixationType>(FixationType.TONGUE);

	return (
		<QuestionTemplate
			questionName="Настройка типа фиксации на всем объекте"
			questionDescription="Выберите двери для всего объекта"
			onSubmit={() => {}}
		>
			<>
				<RadioButton
					radioButtonName="Язычок"
					groupName="fixationTypeOnObject"
					checked={currentFixationType === FixationType.TONGUE}
					onChange={() =>
						setCurrentFixationType(FixationType.TONGUE)
					}
				/>
				<RadioButton
					radioButtonName="Магнит"
					groupName="fixationTypeOnObject"
					checked={currentFixationType === FixationType.MAGNIT}
					onChange={() => FixationType.MAGNIT}
				/>
			</>
		</QuestionTemplate>
	);
};

export default OneFixationTypeOnObjectSetting;
