import { useState } from "react";
import { Door } from "../interfaces/Door.interface";

export const useCheckboxGroup = (doorsInCheckboxGroup: Door[]) => {
	const [checkedDoorsIds, setCheckedDoorsIds] = useState<string[]>([]);

	const checkAllDoors = () => {
		const allCheckedDoorsIds = doorsInCheckboxGroup.map(
			(door) => door.id
		);
		setCheckedDoorsIds(allCheckedDoorsIds);
	};

	const uncheckAllDoors = () => {
		setCheckedDoorsIds([]);
	};

	const shouldCheckAllDoors =
		doorsInCheckboxGroup.length !== checkedDoorsIds.length;

	return {
		checkedDoorsIds,
		checkAllDoors,
        setCheckedDoorsIds,
		uncheckAllDoors,
		shouldCheckAllDoors,
	} as const;
};
