import React, { useEffect } from "react";
import { Door } from "../../interfaces/Door.interface";
import Checkbox from "../Checkbox/Checkbox";
import "./CheckboxGroup.scss";
import EmptyListMessage from "../EmptyListMessage/EmptyListMessage";

const CheckboxGroup = ({
	doors,
	checkedDoorsIds,
	onChange,
	emptyListMessage,
}: {
	doors: Door[];
	checkedDoorsIds: string[];
	onChange: (checkedDoorsIds: string[]) => void;
	emptyListMessage?: React.ReactNode;
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
			{doors.map((door: Door) => (
				<Checkbox
					key={door.id}
					checked={checkedDoorsIds.includes(door.id)}
					onChange={() => onChecked(door.id)}
					checkboxContent={door.name}
				/>
			))}
			<EmptyListMessage
				isHidden={doors.length !== 0}
				emptyListMessageContent={emptyListMessage}
			/>
		</div>
	);
};

export default CheckboxGroup;
