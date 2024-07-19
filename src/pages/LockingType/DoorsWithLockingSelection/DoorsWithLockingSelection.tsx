import React, { useEffect } from "react";
import { useDoors } from "../../../hooks/useDoors";
import QuestionTemplate from "../../../components/QuestionTemplate/QuestionTemplate";
import CheckboxGroup from "../../../components/CheckboxGroup/CheckboxGroup";
import CheckboxGroupControl from "../../../components/CheckboxGroupControl/CheckboxGroupControl";
import { useCheckboxGroup } from "../../../hooks/useCheckboxGroup";
import { lockingTypeStateAPI } from "../../../APIs/lockingTypesState.api";

const DoorsWithLockingSelection = () => {
	const { doors } = useDoors();

	const {
		checkedDoorsIds,
		checkAllDoors,
		setCheckedDoorsIds,
		uncheckAllDoors,
		shouldCheckAllDoors,
	} = useCheckboxGroup(doors);

    const { doorsIdsThatRequiredLocking } = lockingTypeStateAPI.getLockingTypeState();

	useEffect(() => {
		const initialLockingTypeState =
			lockingTypeStateAPI.getLockingTypeState();


        console.log(initialLockingTypeState)    
		setCheckedDoorsIds(
			initialLockingTypeState.doorsIdsThatRequiredLocking
		);
	}, [setCheckedDoorsIds]);

	const onSubmit = () => {
		lockingTypeStateAPI.setDoorsIdsThatRequiredLocking(checkedDoorsIds);
	};

 const nextRoute = doorsIdsThatRequiredLocking.length === 0 ? "/reinforcedHingesSelection" : "/mainLockingPage";

	return (
		<QuestionTemplate
			questionName="Настройка запирания"
			questionDescription="Выберите двери, для которых необходимо запирание"
			previousPageRoute="/doorsList"
			nextPageRoute={nextRoute}
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
