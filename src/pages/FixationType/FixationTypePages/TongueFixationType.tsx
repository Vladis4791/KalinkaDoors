import React, { useState } from "react";
import QuestionTemplate from "../../../components/QuestionTemplate/QuestionTemplate";
import CheckboxGroup from "../../../components/CheckboxGroup/CheckboxGroup";
import { useDoors } from "../../../hooks/useDoors";
import { doorsAPI } from "../../../APIs/doors.api";

const TongueFixationType = () => {
	const doors = useDoors();
    const fixationTypeState = doorsAPI.getFixationTypeState();
    const { tongueDoorsIds } = fixationTypeState;

	const [checkedDoorsIds, setCheckedDoorsIds] = useState<string[]>(tongueDoorsIds);

    const onSubmit = () => {
        fixationTypeState.tongueDoorsIds = checkedDoorsIds;
        doorsAPI.updateFixationTypeState(fixationTypeState);
    }

	return (
		<QuestionTemplate
			questionName="Двери с язычковым фиксатором"
			onSubmit={onSubmit}
			questionDescription="Выберите двери, для которых будут использоваться язычок"
            nextPageRoute="/magnitFixationTypeDoors"
			isLoading={doors.length === 0}
		>
			<CheckboxGroup
				doors={doors}
                initialCheckedDoorsIds={checkedDoorsIds}
				onChange={(checkedDoorsIds) =>
					setCheckedDoorsIds(checkedDoorsIds)
				}
			/>
		</QuestionTemplate>
	);
};

export default TongueFixationType;
