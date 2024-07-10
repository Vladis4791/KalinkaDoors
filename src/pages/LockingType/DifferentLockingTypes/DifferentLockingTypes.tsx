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
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const DifferentLockingTypes = () => {
	const doors = lockingTypeStateAPI.getLockingTypeState().doorsThatRequiredLocking;

	const [lockingTypeState, setLockingTypeState] = useState<LockingTypeState>(
		lockingTypeStateAPI.getLockingTypeState()
	);

	const {
		turnButtonLockingDoorsIds,
		keyFixatorDoorsIds,
		twoEdgedKeysDoorsIds,
	} = lockingTypeState;

	const remainingDoors = doors.filter(
		(door: Door) =>
			!(
				turnButtonLockingDoorsIds.includes(door.id) ||
				twoEdgedKeysDoorsIds.includes(door.id) ||
				keyFixatorDoorsIds.includes(door.id)
			)
	);

	const {
		checkedDoorsIds,
		checkAllDoors,
		uncheckAllDoors,
		setCheckedDoorsIds,
		shouldCheckAllDoors,
	} = useCheckboxGroup(remainingDoors);

	const [lockingType, setLockingType] = useState<LockingType>(
		LockingType.TURN_BUTTON
	);

	const onConfirmed = () => {
		switch (lockingType) {
			case LockingType.TURN_BUTTON:
				lockingTypeStateAPI.setTurnButtonLockingDoorsIds([
					...lockingTypeState.turnButtonLockingDoorsIds,
					...checkedDoorsIds,
				]);
				break;
			case LockingType.KEY_FIXATOR:
				lockingTypeStateAPI.setKeyFixatorDoorsIds([
					...lockingTypeState.keyFixatorDoorsIds,
					...checkedDoorsIds,
				]);
				break;
			case LockingType.TWO_EDGED_KEY:
				lockingTypeStateAPI.setTwoEdgedKeysDoorsIds([
					...lockingTypeState.twoEdgedKeysDoorsIds,
					...checkedDoorsIds,
				]);
				break;
		}

		setLockingTypeState(lockingTypeStateAPI.getLockingTypeState());
		setCheckedDoorsIds([]);
	};

	const onShowModal = () => {
        console.log("modal")
		lockingTypeStateAPI.resetDoorsIds();
		setLockingTypeState(lockingTypeStateAPI.getLockingTypeState());
		setCheckedDoorsIds([]);
	};

	const controlBlock = (
		<div className="lockingTypeControlBlock">
			<CheckboxGroupControl
				doorsCount={checkedDoorsIds.length}
				checkAllDoors={checkAllDoors}
				uncheckAllDoors={uncheckAllDoors}
				shouldCheckAllDoors={shouldCheckAllDoors}
                disabled={remainingDoors.length === 0}
			/>
			<div className="mainPart">
				<SelectBlock
					optionsWithImages={[
						{ optionName: LockingType.TURN_BUTTON, imageURL: "" },
						{ optionName: LockingType.KEY_FIXATOR, imageURL: "" },
						{ optionName: LockingType.TWO_EDGED_KEY, imageURL: "" },
					]}
					value={lockingType}
					selectLabel="Тип фиксации"
					onChange={(option) =>
						setLockingType(option as LockingType)
					}
				/>

				<div className="controlButtons">
					<SecondaryButton
						onClick={onConfirmed}
						title="Подтвердить"
					/>
					<PrimaryButton
						onClick={onShowModal}
						title="Посмотреть список"
					/>
				</div>
			</div>
		</div>
	);

	return (
		<QuestionTemplate
			questionName="Настройка типа запирания"
			questionDescription="Выберите двери из списка и установить для них тип запирания"
			onSubmit={() => {}}
			fixedBlock={controlBlock}
			questionFixedInSize={true}
			nextPageRoute="/doorsWithLockingSelection"
		>
			<CheckboxGroup
				doors={remainingDoors}
				checkedDoorsIds={checkedDoorsIds}
				onChange={(checkedDoorsIds) =>
					setCheckedDoorsIds(checkedDoorsIds)
				}
			/>
		</QuestionTemplate>
	);
};

export default DifferentLockingTypes;
