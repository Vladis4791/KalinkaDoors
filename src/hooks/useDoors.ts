import { useEffect, useState } from "react";
import { Door } from "../interfaces/Door.interface";
import { doorsAPI } from "../APIs/doors.api";

export const useDoors = () => {
	// const [doors, setDoors] = useState<Door[]>([]);

	// useEffect(() => {
	// 	setDoors();
	// }, []);

	return doorsAPI.getAllDoors();
};
