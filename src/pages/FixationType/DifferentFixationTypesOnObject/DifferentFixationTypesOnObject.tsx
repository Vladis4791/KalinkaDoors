import React, { useState } from "react";

import { doorsAPI } from "../../../APIs/doors.api";
import { Door } from "../../../interfaces/Door.interface";
import QuestionTemplate from "../../../components/QuestionTemplate/QuestionTemplate";
import CheckboxGroup from "../../../components/CheckboxGroup/CheckboxGroup";
import SelectBlock from "../../../components/SelectBlock/SelectBlock";
import { useDoors } from "../../../hooks/useDoors";
import SecondaryButton from "../../../components/SecondaryButton/SecondaryButton";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import "./DifferentFixationTypesOnObject.scss";
import { FixationType } from "../../../interfaces/DoorComponents.interface";
import { fixationTypesStateAPI } from "../../../APIs/fixationTypesState.api";
import CheckboxGroupControl from "../../../components/CheckboxGroupControl/CheckboxGroupControl";
import { useCheckboxGroup } from "../../../hooks/useCheckboxGroup";
import ModalWithButton from "../../../components/ModalWithButton/ModalWithButton";
import ConfirmedDoorsSummary from "../../../components/ConfirmedDoorsSummary/ConfirmedDoorsSummary";

const DifferentFixationTypesOnObject = () => {
	const { doors, updateDoors } = useDoors();

	const { shouldBeOneFixationTypeOnObject } = fixationTypesStateAPI.getFixationTypeState();
	// TODO for redirect
	const remainingDoors = doors.filter((door: Door) => !door.components.fixationType);

	const {
		checkedDoorsIds,
		checkAllDoors,
		uncheckAllDoors,
		setCheckedDoorsIds,
		shouldCheckAllDoors,
		confirmedDoorsIds,
		setConfirmedDoorsIds,
        removeIdsFromConfirmedDoorsIds
	} = useCheckboxGroup(remainingDoors);

	const [fixationType, setFixationType] = useState<FixationType>(FixationType.TONGUE);

	const onConfirmed = () => {
		doorsAPI.setSpecificDoorsComponentToInitialValue(
			"fixationType",
			fixationType,
			checkedDoorsIds
		);
		setConfirmedDoorsIds([...confirmedDoorsIds, ...checkedDoorsIds]);
		setCheckedDoorsIds([]);
	};

``
	const updateDeletedDoors = (deletedDoorsIds: string[]) => {
        doorsAPI.setSpecificDoorsComponentToInitialValue("fixationType", null, deletedDoorsIds);
	};


	const onDelete = (deletedDoorsIds: string[]) => {
		removeIdsFromConfirmedDoorsIds(deletedDoorsIds);
		updateDeletedDoors(deletedDoorsIds);
	};

	const resetAllDoors = () => {
		doorsAPI.resetAllDoorsComponentToInitialValue("fixationType", null);
		setCheckedDoorsIds([]);
	};

	const ConfirmedDoorsSummaryModal = (
		<ModalWithButton
			renderButton={(onClick) => (
				<PrimaryButton
					onClick={onClick}
					title={`Посмотреть список (${fixationType})`}
				/>
			)}
			renderModalContent={() => (
				<ConfirmedDoorsSummary
					header={`Двери с типом фиксации "${fixationType}"`}
					doorsInSummary={doorsAPI.getDoorsByComponentValue("fixationType", fixationType)}
					onDelete={onDelete}
				/>
			)}
		/>
	);

	const controlBlock = (
		<div className="fixationTypeControlBlock">
			<button onClick={resetAllDoors}>reset</button>
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
					onChange={(option) => setFixationType(option as FixationType)}
				/>

				<div className="controlButtons">
					<SecondaryButton onClick={onConfirmed} title="Подтвердить" />
					{ConfirmedDoorsSummaryModal}
				</div>
			</div>
		</div>
	);

	const emptyListMessage = (
		<>
			<h3>Все двери настроены!</h3>
			{ConfirmedDoorsSummaryModal}
		</>
	);

	return (
		<QuestionTemplate
			questionName="Настройка типа фиксации"
			questionDescription="Выберите двери из списка и установить для них тип фиксации"
			onSubmit={() => {}}
			fixedBlock={controlBlock}
			questionFixedInSize={true}
			nextPageRoute="/doorsWithLockingSelection"
			previousPageRoute="/fixationTypeSelection"
		>
			<CheckboxGroup
				doors={remainingDoors}
				emptyListMessage={emptyListMessage}
				checkedDoorsIds={checkedDoorsIds}
				onChange={(checkedDoorsIds) => setCheckedDoorsIds(checkedDoorsIds)}
			/>
		</QuestionTemplate>
	);
};

export default DifferentFixationTypesOnObject;
