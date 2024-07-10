import React, { useState } from "react";

import { doorsAPI } from "../../../APIs/doors.api";
import { Door } from "../../../interfaces/Door.interface";
import QuestionTemplate from "../../../components/QuestionTemplate/QuestionTemplate";
import CheckboxGroup from "../../../components/CheckboxGroup/CheckboxGroup";
import SelectBlock from "../../../components/SelectBlock/SelectBlock";
import { useDoors } from "../../../hooks/useDoors";
import SecondaryButton from "../../../components/SecondaryButton/SecondaryButton";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import { FixationTypeState } from "../../../interfaces/FixationTypeState.interface";
import "./DifferentFixationTypesOnObject.scss";
import { FixationType } from "../../../interfaces/DoorComponents.interface";
import { fixationTypesStateAPI } from "../../../APIs/fixationTypesState.api";
import CheckboxGroupControl from "../../../components/CheckboxGroupControl/CheckboxGroupControl";
import { useCheckboxGroup } from "../../../hooks/useCheckboxGroup";

const DifferentFixationTypesOnObject = () => {
	const doors = useDoors();

	const [fixationTypeState, setFixationTypeState] =
		useState<FixationTypeState>(
			fixationTypesStateAPI.getFixationTypeState()
		);

	const { tongueDoorsIds, magnitDoorsIds } = fixationTypeState;

	const remainingDoors = doors.filter(
		(door: Door) =>
			!(
				tongueDoorsIds.includes(door.id) ||
				magnitDoorsIds.includes(door.id)
			)
	);

	const {
		checkedDoorsIds,
		checkAllDoors,
		uncheckAllDoors,
		setCheckedDoorsIds,
		shouldCheckAllDoors,
	} = useCheckboxGroup(remainingDoors);

	const [fixationType, setFixationType] = useState<FixationType>(
		FixationType.TONGUE
	);

	const onConfirmed = () => {
		if (fixationType === FixationType.TONGUE) {
			fixationTypesStateAPI.setTongueDoorsIds([
				...fixationTypeState.tongueDoorsIds,
				...checkedDoorsIds,
			]);
		} else if (fixationType === FixationType.MAGNIT) {
			fixationTypesStateAPI.setMagnitDoorsIds([
				...fixationTypeState.magnitDoorsIds,
				...checkedDoorsIds,
			]);
		}

		setFixationTypeState(fixationTypesStateAPI.getFixationTypeState());
		setCheckedDoorsIds([]);
	};

	const onShowModal = () => {
		fixationTypesStateAPI.setupFixationTypeState();
		setFixationTypeState(fixationTypesStateAPI.getFixationTypeState());
		setCheckedDoorsIds([]);
	};

	const controlBlock = (
		<div className="fixationTypeControlBlock">
			<CheckboxGroupControl
				doorsCount={checkedDoorsIds.length}
				checkAllDoors={checkAllDoors}
				uncheckAllDoors={uncheckAllDoors}
				shouldCheckAllDoors={shouldCheckAllDoors}
			/>
			<div className="mainPart">
				<SelectBlock
					optionsWithImages={[
						{ optionName: FixationType.TONGUE, imageURL: "" },
						{ optionName: FixationType.MAGNIT, imageURL: "" },
					]}
					value={fixationType}
					selectLabel="Тип фиксации"
					onChange={(option) =>
						setFixationType(option as FixationType)
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
			questionName="Настройка типа фиксации"
			questionDescription="Выберите двери из списка и установить для них тип фиксации"
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

export default DifferentFixationTypesOnObject;
