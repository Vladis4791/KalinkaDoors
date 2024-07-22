import { Door, DoorInfo } from "../interfaces/Door.interface";
import { DoorComponents } from "../interfaces/DoorComponents.interface";
import { Storage } from "./storage.api";

class DoorsAPI {
	private storage = new Storage<Door[]>("doors");
	private doors = this.storage.getObject();

	public getAllDoors() {
		// console.log("allDoors", this.doors);
		return this.doors;
	}

	public getDoorById(doorId: string) {
		const requiredDoor = this.doors.find((door: Door) => door.id === doorId);

		return requiredDoor;
	}

	public updateDoors = (newDoors: Door[]) => {
		this.doors = newDoors;
		localStorage.setItem("doors", JSON.stringify(this.doors));
	};

	public updateDoor(doorToUpdate: Door) {
		const index = this.doors.findIndex((door) => door.id === doorToUpdate.id);
		if (index !== -1) {
			this.doors[index] = doorToUpdate;
			localStorage.setItem("doors", JSON.stringify(this.doors));
		}
	}

    public getDoorsByComponentValue(componentName: keyof DoorComponents, value: unknown) {
        return this.doors.filter((door) => door.components[componentName] === value);
    }

	public setSpecificDoorsComponentToInitialValue(
		componentName: keyof DoorComponents,
		initialValue: unknown,
		doorsIds: string[]
	) {
		const newDoors = this.doors.map((door) => {
            if(doorsIds.includes(door.id)) {
                door.components[componentName] = initialValue as never;
            }
			
			return door;
		});

		this.updateDoors(newDoors);
	}

	public resetAllDoorsComponentToInitialValue(
		componentName: keyof DoorComponents,
		initialValue: 0 | null
	) {
		const newDoors = this.doors.map((door) => {
			door.components[componentName] = initialValue as never;
			return door;
		});

		this.updateDoors(newDoors);
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
		door.components = this.getEmptyDoorComponent();
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

	private getEmptyDoorComponent = () => {
		const doorComponents: DoorComponents = {
			doorPanel: 1,
			doorstep: 0,
			fixationType: null,
			lockingType: null,
			handle: null,
			dobor: [],
			doorBox: 1,
			platband: 0,
		};

		return doorComponents;
	};
}

export const doorsAPI = new DoorsAPI();
