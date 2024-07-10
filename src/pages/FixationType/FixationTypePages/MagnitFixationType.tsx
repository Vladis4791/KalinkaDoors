import React, { useState } from "react";
import QuestionTemplate from "../../../components/QuestionTemplate/QuestionTemplate";
import CheckboxGroup from "../../../components/CheckboxGroup/CheckboxGroup";
import { useDoors } from "../../../hooks/useDoors";
import { doorsAPI } from "../../../APIs/doors.api";

const MagnitFixationType = () => {
	const doors = useDoors();
    const fixationTypeState = doorsAPI.getFixationTypeState();
    const { magnitDoorsIds, tongueDoorsIds } = fixationTypeState;
    const remainingDoors = doors.filter(door => !tongueDoorsIds.includes(door.id))
    

	const [checkedDoorsIds, setCheckedDoorsIds] = useState<string[]>(magnitDoorsIds);

    const onSubmit = () => {
        fixationTypeState.magnitDoorsIds = checkedDoorsIds;
        doorsAPI.updateFixationTypeState(fixationTypeState);
    }

	return (
		<QuestionTemplate
			questionName="Двери с магнитным фиксатором"
			onSubmit={onSubmit}
			questionDescription="Выберите двери, для которых будут использоваться магнит"
            nextPageRoute="/magnitFixationTypeDoors"
			isLoading={doors.length === 0}
		>
			<CheckboxGroup
				doors={remainingDoors}
                initialCheckedDoorsIds={checkedDoorsIds}
				onChange={(checkedDoorsIds) =>
					setCheckedDoorsIds(checkedDoorsIds)
				}
			/>
		</QuestionTemplate>
	);
};

export default MagnitFixationType;
