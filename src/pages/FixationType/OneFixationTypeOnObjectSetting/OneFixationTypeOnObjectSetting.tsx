import React, { useState } from "react";
import QuestionTemplate from "../../../components/QuestionTemplate/QuestionTemplate";
import RadioButton from "../../../components/RadioButton/RadioButton";
import { FixationType } from "../../../interfaces/DoorComponents.interface";
import { useDoors } from "../../../hooks/useDoors";
import { fixationTypesStateAPI } from "../../../APIs/fixationTypesState.api";

const OneFixationTypeOnObjectSetting = () => {
	const [currentFixationType, setCurrentFixationType] =
		useState<FixationType>(FixationType.TONGUE);

    const doors = useDoors();

    const onSubmit = () => {

        const allDoorsIds = doors.map(door => door.id);

        fixationTypesStateAPI.resetDoorsIds();

        if(currentFixationType === FixationType.TONGUE) {
            fixationTypesStateAPI.setTongueDoorsIds(allDoorsIds);

        } else if (currentFixationType === FixationType.MAGNIT) {
            fixationTypesStateAPI.setMagnitDoorsIds(allDoorsIds);
        }
    }

	return (
		<QuestionTemplate
			questionName="Настройка типа фиксации на всем объекте"
			questionDescription="Выберите двери для всего объекта"
			onSubmit={onSubmit}
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
					onChange={() => setCurrentFixationType(FixationType.MAGNIT)}
				/>
			</>
		</QuestionTemplate>
	);
};

export default OneFixationTypeOnObjectSetting;
