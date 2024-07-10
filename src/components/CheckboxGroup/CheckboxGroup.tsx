import React, { useState } from "react";
import { Door } from "../../interfaces/Door.interface";
import Checkbox from "../Checkbox/Checkbox";
import './CheckboxGroup.scss';

const CheckboxGroup = ({
	doors,
    initialCheckedDoorsIds = [],
	onChange,
}: {
	doors: Door[];
    initialCheckedDoorsIds?: string[],
	onChange: (checkedDoorsIds: string[]) => void;
}) => {
	const [checkedDoorsIds, setCheckedDoorsIds] = useState<string[]>(initialCheckedDoorsIds);

	const onChecked = (id: string) => {
		const isInCheckedDoors = checkedDoorsIds.includes(id);
		let arr: string[];
		if (isInCheckedDoors) {
			arr = checkedDoorsIds.filter((doorId) => doorId !== id);
			setCheckedDoorsIds(arr);
		} else {
			arr = [...checkedDoorsIds, id];
		}

		setCheckedDoorsIds(arr);
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
		</div>
	);
};

export default CheckboxGroup;
