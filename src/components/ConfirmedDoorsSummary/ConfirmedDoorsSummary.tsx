import React from "react";
import { Door } from "../../interfaces/Door.interface";
import CheckboxGroup from "../CheckboxGroup/CheckboxGroup";
import { useCheckboxGroup } from "../../hooks/useCheckboxGroup";
import CheckboxGroupControl from "../CheckboxGroupControl/CheckboxGroupControl";
import "./ConfirmedDoorsSummary.scss";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const ConfirmedDoorsSummary = ({
	header,
	doorsInSummary,
	onDelete,
}: {
	header: string;
	doorsInSummary: Door[];
	onDelete: (doorsIds: string[]) => void;
}) => {
	const {
		checkedDoorsIds,
		checkAllDoors,
		uncheckAllDoors,
		setCheckedDoorsIds,
		shouldCheckAllDoors,
	} = useCheckboxGroup(doorsInSummary);

	return (
		<div className="ConfirmedDoorsSummary">
			<h2 className="confirmedDoorsSummaryHeader">{header}</h2>
			<div className="checkboxGroupBlock">
				<CheckboxGroup
					doors={doorsInSummary}
					checkedDoorsIds={checkedDoorsIds}
					onChange={(checkedDoorsIds) => setCheckedDoorsIds(checkedDoorsIds)}
				/>
			</div>
			<div className="checkboxesControl">
				<CheckboxGroupControl
					doorsCount={checkedDoorsIds.length}
					checkAllDoors={checkAllDoors}
					uncheckAllDoors={uncheckAllDoors}
					shouldCheckAllDoors={shouldCheckAllDoors}
				/>
				<PrimaryButton
					onClick={() => onDelete(checkedDoorsIds)}
					title="Удалить выбранное"
					className="deleteButton"
					disabled={checkedDoorsIds.length === 0}
				/>
			</div>
		</div>
	);
};

export default ConfirmedDoorsSummary;