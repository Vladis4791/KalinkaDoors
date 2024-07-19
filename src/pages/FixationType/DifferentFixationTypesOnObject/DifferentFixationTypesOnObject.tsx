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
import CheckedDoorsSummary from "../../../components/ConfirmedDoorsSummary/ConfirmedDoorsSummary";

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
	} = useCheckboxGroup(remainingDoors);

	const [fixationType, setFixationType] = useState<FixationType>(FixationType.TONGUE);

	const onConfirmed = () => {
		const newDoors = doors.map((door) => {
			if (checkedDoorsIds.includes(door.id)) {
				door.components.fixationType = fixationType;
			}

			return door;
		});

		updateDoors(newDoors);
		setConfirmedDoorsIds([...confirmedDoorsIds, ...checkedDoorsIds]);
		setCheckedDoorsIds([]);
	};

	const getDoorsWithCurrentFixationType = () => {
		return doors.filter((door) => door.components.fixationType === fixationType);
	};

    const updateDeletedDoors = (deletedDoorsIds: string[]) => {
        const newDoors = doors.map(door => {
            if(deletedDoorsIds.includes(door.id)) {
                door.components.fixationType = null;
            }
            return door;
        })
        updateDoors(newDoors);
    }

    const updateConfirmedDoors = (deletedDoorsIds: string[]) => {
        const newConfirmedDoors = confirmedDoorsIds.filter(
			(doorId) => !deletedDoorsIds.includes(doorId)
		);
		setConfirmedDoorsIds(newConfirmedDoors);
    }
	const onDelete = (deletedDoorsIds: string[]) => {
		updateConfirmedDoors(deletedDoorsIds);
        updateDeletedDoors(deletedDoorsIds);
	};

	const onShowModal = () => {
		doorsAPI.resetDoorsComponentToInitialValue("fixationType", null);
		setCheckedDoorsIds([]);
	};

	const controlBlock = (
		<div className="fixationTypeControlBlock">
			<button onClick={onShowModal}>reset</button>
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
					<ModalWithButton
						renderButton={(onClick) => (
							<PrimaryButton
								onClick={onClick}
								title={`Посмотреть список (${fixationType})`}
							/>
						)}
						renderModalContent={() => (
							<CheckedDoorsSummary
								header={`Двери с типом фиксации "${fixationType}"`}
								doorsInSummary={getDoorsWithCurrentFixationType()}
								onDelete={onDelete}
							/>
						)}
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
			previousPageRoute="/fixationTypeSelection"
		>
			<CheckboxGroup
				doors={remainingDoors}
				checkedDoorsIds={checkedDoorsIds}
				onChange={(checkedDoorsIds) => setCheckedDoorsIds(checkedDoorsIds)}
			/>
		</QuestionTemplate>
	);
};

export default DifferentFixationTypesOnObject;
