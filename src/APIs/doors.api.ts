import { Door, DoorInfo } from "../interfaces/Door.interface";
import { DoorComponents } from "../interfaces/DoorComponents.interface";
import { Storage } from "./storage.api";

class DoorsAPI {
	private storage = new Storage<Door[]>("doors");
	private doors = this.storage.getObject();

	public getAllDoors() {
		return this.storage.getObject();
	}

	public getDoorById(doorId: string) {
		const requiredDoor = this.doors.find(
			(door: Door) => door.id === doorId
		);

		return requiredDoor;
	}

	// public updateDoorInfo(doorId: string, doorInfo: DoorInfo) {
	//     const door = this.getDoorById(doorId);
	//     door.doorInfo = doorInfo;
	//     localStorage.setItem("doors", JSON.stringify(this.doors));
	// }

	public updateDoor(doorToUpdate: Door) {
		const index = this.doors.findIndex(
			(door) => door.id === doorToUpdate.id
		);
		if (index !== -1) {
			this.doors[index] = doorToUpdate;
			localStorage.setItem("doors", JSON.stringify(this.doors));
		}
	}

	public setupDoors(doorsCount: number) {
		const doors = this.createDoorsWithComponentsInstances(doorsCount);
		this.storage.writeObject(doors);
	}

	private createDoorsWithComponentsInstances = (doorsCount: number) => {
		const doors = [];

		for (let i = 0; i < doorsCount; i++) {
			const currentDoor = this.createDoorWithComponentsInstance(i + 1);
			doors.push(currentDoor);
		}

		return doors;
	};

	private createDoorWithComponentsInstance = (doorId: number) => {
		const door = {} as Door;
		door.name = `Дверь ${doorId}`;
		door.id = doorId.toString();
		door.components = {} as DoorComponents;
		door.doorInfo = this.getEmptyDoorInfo();

		return door;
	};

	private getEmptyDoorInfo = () => {
		const doorInfo: DoorInfo = {
			type: null,
			currentState: null,
			size: {
				width: 0,
				height: 0,
				depth: 0,
			},
		};

		return doorInfo;
	};
}

export const doorsAPI = new DoorsAPI();
