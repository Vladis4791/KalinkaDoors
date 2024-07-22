import { useState } from "react";
import { Door } from "../interfaces/Door.interface";

export const useList = (property: string) => {

    

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
