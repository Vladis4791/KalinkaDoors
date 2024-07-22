import React, { useState } from "react";
import QuestionTemplate from "../../../components/QuestionTemplate/QuestionTemplate";
import CheckboxGroup from "../../../components/CheckboxGroup/CheckboxGroup";
import { useDoors } from "../../../hooks/useDoors";
import { LockingType } from "../../../interfaces/DoorComponents.interface";
import { lockingTypeStateAPI } from "../../../APIs/lockingTypesState.api";
import { LockingTypeState } from "../../../interfaces/LockingTypeState.interface";
import { useCheckboxGroup } from "../../../hooks/useCheckboxGroup";
import { Door } from "../../../interfaces/Door.interface";
import CheckboxGroupControl from "../../../components/CheckboxGroupControl/CheckboxGroupControl";
import SelectBlock from "../../../components/SelectBlock/SelectBlock";
import SecondaryButton from "../../../components/SecondaryButton/SecondaryButton";
import { doorsAPI } from "../../../APIs/doors.api";
import ConfirmedDoorsSummaryModal from "../../../components/ConfirmedDoorsSummaryModal/ConfirmedDoorsSummaryModal";
import "./DifferentLockingTypes.scss";

const DifferentLockingTypes = () => {
	const { doors } = useDoors();

	const lockingTypeState = lockingTypeStateAPI.getLockingTypeState();

	const { doorsIdsThatRequiredLocking } = lockingTypeState;

	const remainingDoors = doors.filter(
		(door: Door) =>
			!door.components.lockingType && doorsIdsThatRequiredLocking.includes(door.id)
	);

	const {
		checkedDoorsIds,
		checkAllDoors,
		uncheckAllDoors,
		setCheckedDoorsIds,
		shouldCheckAllDoors,
		setConfirmedDoorsIds,
		confirmedDoorsIds,
		removeIdsFromConfirmedDoorsIds,
	} = useCheckboxGroup(remainingDoors);

	const [lockingType, setLockingType] = useState<LockingType>(LockingType.TURN_BUTTON);

	const getDoorsWithCurrentLockingType = () => {
		return doors.filter((door) => door.components.lockingType === lockingType);
	};

	const onConfirmed = () => {
		doorsAPI.setSpecificDoorsComponentToInitialValue(
			"lockingType",
			lockingType,
			checkedDoorsIds
		);
		setConfirmedDoorsIds([...confirmedDoorsIds, ...checkedDoorsIds]);
		setCheckedDoorsIds([]);
	};

	``;
	const updateDeletedDoors = (deletedDoorsIds: string[]) => {
		doorsAPI.setSpecificDoorsComponentToInitialValue("lockingType", null, deletedDoorsIds);
	};

	const onDelete = (deletedDoorsIds: string[]) => {
		removeIdsFromConfirmedDoorsIds(deletedDoorsIds);
		updateDeletedDoors(deletedDoorsIds);
	};

	const resetAllDoors = () => {
		doorsAPI.resetAllDoorsComponentToInitialValue("lockingType", null);
		setCheckedDoorsIds([]);
	};

	const controlBlock = (
		<div className="lockingTypeControlBlock">
			{/* <button onClick={resetAllDoors}>reset</button> */}
			<div className="checkboxGroupControl">
				<CheckboxGroupControl
					doorsCount={checkedDoorsIds.length}
					checkAllDoors={checkAllDoors}
					uncheckAllDoors={uncheckAllDoors}
					shouldCheckAllDoors={shouldCheckAllDoors}
					disabled={remainingDoors.length === 0}
				/>
			</div>
			<div className="mainPart">
				<SelectBlock
					optionsWithImages={[
						{
							optionName: LockingType.TURN_BUTTON,
							imageURL: "",
						},
						{
							optionName: LockingType.KEY_FIXATOR,
							imageURL: "",
						},
						{
							optionName: LockingType.TWO_EDGED_KEY,
							imageURL: "",
						},
					]}
					value={lockingType}
					selectLabel="Тип запирания"
					onChange={(option) => setLockingType(option as LockingType)}
				/>

				<div className="controlButtons">
					<SecondaryButton onClick={onConfirmed} title="Подтвердить" />
					<ConfirmedDoorsSummaryModal
						listTitle={lockingType}
						onDelete={onDelete}
						doorsInSummary={getDoorsWithCurrentLockingType()}
					/>
				</div>
			</div>
		</div>
	);

	const emptyListMessage = (
		<>
			<h3>Все двери настроены!</h3>
			{
				<ConfirmedDoorsSummaryModal
					listTitle={lockingType}
					onDelete={onDelete}
					doorsInSummary={getDoorsWithCurrentLockingType()}
				/>
			}
		</>
	);

	return (
		<QuestionTemplate
			questionName="Настройка типа запирания"
			questionDescription="Выберите двери из списка и установить для них тип запирания"
			onSubmit={() => {}}
			fixedBlock={controlBlock}
			questionFixedInSize={true}
			previousPageRoute="/doorsWithLockingSelection"
			nextPageRoute="/doorsList" // TODO change to hinges
		>
			<CheckboxGroup
				doors={remainingDoors}
				checkedDoorsIds={checkedDoorsIds}
				onChange={(checkedDoorsIds) => setCheckedDoorsIds(checkedDoorsIds)}
				emptyListMessage={emptyListMessage}
			/>
		</QuestionTemplate>
	);
};

export default DifferentLockingTypes;
