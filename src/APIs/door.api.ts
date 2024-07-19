import { Door, DoorInfo } from "../interfaces/Door.interface";
import { DoorComponents, DoorVariation } from "../interfaces/DoorComponents.interface";
import { Storage } from "./storage.api";

export class DoorAPI {
	private storage = new Storage<Door[]>("Doors");
    private doors = this.storage.getObject();
    private doorId: string;
    private door: Door;
    private doorInfo: DoorInfo;
    private doorComponents: DoorComponents;

    private getDoorById(doorId: string) {
        
    }

    public constructor(doorId: string) {
        this.doorId = doorId;
        this.door = this.doors.find(door => door.id === doorId);
    }
	// public getFixationTypeState() {
	// 	return this.storage.getObject();
	// }

    public setDoorInfoProperty(property: keyof DoorInfo, value?: never) {
        console.log(this.door.doorInfo[property])
        // this.storage.replaceObject(this.doors);
    }

    public setDoorType(doorType: DoorVariation) {
        this.door.doorInfo.type = doorType;
        this.storage.writeObject(this.doors);
    }

    

	public setShouldBeOneFixationTypeOnObject(value: boolean) {
		this.storage.set("oneFixationTypeOnObject", value);
	}

	public setTongueDoorsIds(doorsIds: string[]) {
		this.storage.set("tongueDoorsIds", doorsIds);
	}

	public setMagnitDoorsIds(doorsIds: string[]) {
		this.storage.set("magnitDoorsIds", doorsIds);
	}

	public setupFixationTypeState() {
		const fixationTypeState: FixationTypeState = {
			oneFixationTypeOnObject: true,
			tongueDoorsIds: [],
			magnitDoorsIds: [],
		};

        
		this.storage.writeObject(fixationTypeState);
	}

	public resetDoorsIds() {
		this.setMagnitDoorsIds([]);
		this.setTongueDoorsIds([]);
	}
}
