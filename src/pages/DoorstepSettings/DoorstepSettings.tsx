import React, { useEffect, useState } from "react";
import QuestionTemplate from "../../components/QuestionTemplate/QuestionTemplate";
import "./DoorstepSettings.scss";
import CheckboxGroup from "../../components/CheckboxGroup/CheckboxGroup";
import { useDoors } from "../../hooks/useDoors";
import { useCheckboxGroup } from "../../hooks/useCheckboxGroup";
import CheckboxGroupControl from "../../components/CheckboxGroupControl/CheckboxGroupControl";

const DoorstepSettings = () => {
	const { doors, updateDoors } = useDoors();

	const {
		checkedDoorsIds,
		checkAllDoors,
		setCheckedDoorsIds,
		uncheckAllDoors,
		shouldCheckAllDoors,
	} = useCheckboxGroup(doors);

	useEffect(() => {
		const previouslyCheckedDoorsIds = doors
			.filter((door) => door.components.doorstep === 1)
			.map((door) => door.id);
        setCheckedDoorsIds(previouslyCheckedDoorsIds);
	}, [doors, setCheckedDoorsIds]);

	const onSubmit = () => {
		const newDoors = doors.map((door) => {
			door.components.doorstep = checkedDoorsIds.includes(door.id) ? 1 : 0;
			return door;
		});

		updateDoors(newDoors);
	};

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
			onSubmit={onSubmit}
		>
			<CheckboxGroup
				doors={doors}
				checkedDoorsIds={checkedDoorsIds}
				onChange={(checkedDoorsIds) => setCheckedDoorsIds(checkedDoorsIds)}
			/>
		</QuestionTemplate>
	);
};

export default DoorstepSettings;
