import React from "react";
import { Door } from "../../interfaces/Door.interface";
import Checkbox from "../Checkbox/Checkbox";
import "./CheckboxGroup.scss";
import EmptyListMessage from "../EmptyListMessage/EmptyListMessage";

const CheckboxGroup = ({
	doors,
	checkedDoorsIds,
	onChange,
}: {
	doors: Door[];
	checkedDoorsIds: string[];
	onChange: (checkedDoorsIds: string[]) => void;
}) => {
	const onChecked = (id: string) => {
		const isInCheckedDoors = checkedDoorsIds.includes(id);
		let arr: string[];
		if (isInCheckedDoors) {
			arr = checkedDoorsIds.filter((doorId) => doorId !== id);
		} else {
			arr = [...checkedDoorsIds, id];
		}
		onChange(arr);
	};

	return (
		<div className="CheckboxGroup">
			{doors.length === 0 ? (
				<EmptyListMessage openResultListInModal={() => {}} />
			) : (
				doors.map((door: Door) => (
					<Checkbox
						key={door.id}
						checked={checkedDoorsIds.includes(door.id)}
						onChange={() => onChecked(door.id)}
						checkboxContent={door.name}
					/>
				))
			)}
		</div>
	);
};

export default CheckboxGroup;
