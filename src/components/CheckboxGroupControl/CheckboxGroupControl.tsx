import React from "react";
import SecondaryButton from "../SecondaryButton/SecondaryButton";
import "./CheckboxGroupControl.scss";

const CheckboxGroupControl = ({
	doorsCount,
	checkAllDoors,
	uncheckAllDoors,
	shouldCheckAllDoors,
	disabled = false,
}: {
	doorsCount: number;
	checkAllDoors: () => void;
	uncheckAllDoors: () => void;
	shouldCheckAllDoors: boolean;
	disabled?: boolean;
}) => {
	const buttonName = shouldCheckAllDoors ? "Выбрать все" : "Убрать все";

	const onClick = shouldCheckAllDoors ? checkAllDoors : uncheckAllDoors;

	return (
		<div className="CheckboxGroupControl">
			<div className="checkedDoorsCount">
				Выбрано дверей: {doorsCount}
			</div>
			<SecondaryButton
				title={buttonName}
				onClick={onClick}
				className={`checkboxGroupControlButton ${disabled ? "disabled" : ""}`}
			/>
		</div>
	);
};

export default CheckboxGroupControl;
