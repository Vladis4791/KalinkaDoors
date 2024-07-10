import React, { useEffect, useState } from "react";

import { doorsAPI } from "../../../APIs/doors.api";
import { Door } from "../../../interfaces/Door.interface";
import QuestionTemplate from "../../../components/QuestionTemplate/QuestionTemplate";
import CheckboxGroup from "../../../components/CheckboxGroup/CheckboxGroup";
import Select from "../../../components/Select/Select";
import SelectBlock from "../../../components/SelectBlock/SelectBlock";
import { useDoors } from "../../../hooks/useDoors";
import SecondaryButton from "../../../components/SecondaryButton/SecondaryButton";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import { FixationTypeState } from "../../../interfaces/FixationTypeState.interface";

const DifferentFixationTypesOnObject = () => {
	const doors = useDoors();

	const [checkedDoorsIds, setCheckedDoorsIds] = useState<string[]>([]);
	const [fixationTypeState, setFixationTypeState] =
		useState<FixationTypeState>(doorsAPI.getFixationTypeState());


	const { tongueDoorsIds, magnitDoorsIds } = fixationTypeState;
    console.log(fixationTypeState)
    console.log(tongueDoorsIds, magnitDoorsIds);
	const remainingDoors = doors.filter(
		(door) =>
			!(
				tongueDoorsIds.includes(door.id) ||
				magnitDoorsIds.includes(door.id)
			)
	);

	const [fixationType, setFixationType] = useState("Язычок");

	const onConfirmed = () => {
		const newFixationTypeState = structuredClone(fixationTypeState);
		console.log(checkedDoorsIds);
		if (fixationType === "Язычок") {
			newFixationTypeState.tongueDoorsIds = [
				...newFixationTypeState.tongueDoorsIds,
				...checkedDoorsIds,
			];
		} else if (fixationType === "Магнит") {
			newFixationTypeState.magnitDoorsIds = [
				...newFixationTypeState.magnitDoorsIds,
				...checkedDoorsIds,
			];
		}

		setFixationTypeState(newFixationTypeState);
		setCheckedDoorsIds([]);
		doorsAPI.updateFixationTypeState(newFixationTypeState);
	};

	const onShowModal = () => {
		console.log("modal");
		doorsAPI.SetupFixationTypeState();
		setCheckedDoorsIds([]);
	};

	const controlBlock = (
		<>
			<SelectBlock
				optionsWithImages={[
					{ optionName: "Язычок", imageURL: "" },
					{ optionName: "Магнит", imageURL: "" },
				]}
				value={fixationType}
				selectLabel="Тип фиксации"
				onChange={(option) => setFixationType(option)}
			/>

			<div className="controlBlock">
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
		</>
	);

	return (
		<QuestionTemplate
			questionName="Настройка типа фиксации"
			questionDescription="Выберите двери из списка и установить для них тип фиксации"
			onSubmit={() => {}}
			fixedBlock={controlBlock}
		>
			<CheckboxGroup
				doors={remainingDoors}
				initialCheckedDoorsIds={checkedDoorsIds}
				onChange={(checkedDoorsIds) =>
					setCheckedDoorsIds(checkedDoorsIds)
				}
			/>
		</QuestionTemplate>
	);
};

export default DifferentFixationTypesOnObject;
