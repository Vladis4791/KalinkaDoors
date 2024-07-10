import React, { useEffect, useState } from "react";
import QuestionTemplate from "../../components/QuestionTemplate/QuestionTemplate";
import { Door } from "../../interfaces/Door.interface";
import { doorsAPI } from "../../APIs/doors.api";
import Checkbox from "../../components/Checkbox/Checkbox";
import "./DoorstepSettings.scss";
import CheckboxGroup from "../../components/CheckboxGroup/CheckboxGroup";
import { useDoors } from "../../hooks/useDoors";
import { useCheckboxGroup } from "../../hooks/useCheckboxGroup";
import CheckboxGroupControl from "../../components/CheckboxGroupControl/CheckboxGroupControl";

const DoorstepSettings = () => {
	const doors = useDoors();

	const {
		checkedDoorsIds,
		checkAllDoors,
		setCheckedDoorsIds,
		uncheckAllDoors,
		shouldCheckAllDoors,
	} = useCheckboxGroup(doors);

	return (
		<QuestionTemplate
			questionName="Настройка порога"
			questionDescription="Выберите двери, для которых необходим порог"
			previousPageRoute="/doorsList"
			nextPageRoute="/fixationTypeSelection"
			questionFixedInSize={true}
			fixedBlock={
				<CheckboxGroupControl
					doorsCount={checkedDoorsIds.length}
					checkAllDoors={checkAllDoors}
					uncheckAllDoors={uncheckAllDoors}
					shouldCheckAllDoors={shouldCheckAllDoors}
				/>
			}
			onSubmit={() => {}}
		>
			<CheckboxGroup
				doors={doors}
				checkedDoorsIds={checkedDoorsIds}
				onChange={(checkedDoorsIds) =>
					setCheckedDoorsIds(checkedDoorsIds)
				}
			/>
		</QuestionTemplate>
	);
};

export default DoorstepSettings;
