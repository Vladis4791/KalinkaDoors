import React, { useEffect } from "react";
import { useDoors } from "../../../hooks/useDoors";
import QuestionTemplate from "../../../components/QuestionTemplate/QuestionTemplate";
import CheckboxGroup from "../../../components/CheckboxGroup/CheckboxGroup";
import CheckboxGroupControl from "../../../components/CheckboxGroupControl/CheckboxGroupControl";
import { useCheckboxGroup } from "../../../hooks/useCheckboxGroup";
import { lockingTypeStateAPI } from "../../../APIs/lockingTypesState.api";

const DoorsWithLockingSelection = () => {
	const doors = useDoors();
	const {
		checkedDoorsIds,
		checkAllDoors,
		setCheckedDoorsIds,
		uncheckAllDoors,
		shouldCheckAllDoors,
	} = useCheckboxGroup(doors);

	useEffect(() => {
		const initialLockingTypeState =
			lockingTypeStateAPI.getLockingTypeState();

		const doorsIdsThatRequiredLocking =
			initialLockingTypeState.doorsThatRequiredLocking.map(
				(door) => door.id
			);
		setCheckedDoorsIds(doorsIdsThatRequiredLocking);
	}, [setCheckedDoorsIds]);

	const onSubmit = () => {
        const checkedDoors = doors.filter(door => checkedDoorsIds.includes(door.id));
		lockingTypeStateAPI.setDoorsThatRequiredLocking(checkedDoors);
	};

	return (
		<QuestionTemplate
			questionName="Настройка запирания"
			questionDescription="Выберите двери, для которых необходимо запирание"
			previousPageRoute="/doorsList"
			nextPageRoute="/differentLockingTypes"
			questionFixedInSize={true}
			onSubmit={onSubmit}
			fixedBlock={
				<CheckboxGroupControl
					checkAllDoors={checkAllDoors}
					uncheckAllDoors={uncheckAllDoors}
					shouldCheckAllDoors={shouldCheckAllDoors}
					doorsCount={checkAllDoors.length}
				/>
			}
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

export default DoorsWithLockingSelection;
