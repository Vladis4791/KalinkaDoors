import { useState } from "react";
import { Door } from "../interfaces/Door.interface";

export const useCheckboxGroup = (doorsInCheckboxGroup: Door[]) => {

    const [confirmedDoorsIds, setConfirmedDoorsIds] = useState<string[]>([]);
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

    const removeIdsFromConfirmedDoorsIds = (idsToRemove: string[]) => {
        const newConfirmedDoors = confirmedDoorsIds.filter(
			(doorId) => !idsToRemove.includes(doorId)
		);
		setConfirmedDoorsIds(newConfirmedDoors);
    }

	return {
		checkedDoorsIds,
		checkAllDoors,
        setCheckedDoorsIds,
		uncheckAllDoors,
		shouldCheckAllDoors,
        confirmedDoorsIds,
        setConfirmedDoorsIds,
        removeIdsFromConfirmedDoorsIds
	} as const;
};
