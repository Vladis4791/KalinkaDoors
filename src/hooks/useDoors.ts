import { Door } from "../interfaces/Door.interface";
import { doorsAPI } from "../APIs/doors.api";

export const useDoors = () => {

    const doors = doorsAPI.getAllDoors() as Door[];

    // const updateDoors = (doors: Door[]) => doorsAPI.updateDoors(doors);
    const updateDoors = doorsAPI.updateDoors;

	return { doors, updateDoors } as const;
};
