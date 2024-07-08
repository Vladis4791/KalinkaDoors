import { Door, DoorWithComponents } from "../interfaces/Door.interface";
import { DoorComponents } from "../interfaces/DoorComponents.interface";

class DoorsAPI {

    public getAllDoorsWithItsComponents() {
        return JSON.parse(localStorage.getItem('doors'));
    }

    public getAllDoors() {
        return JSON.parse(localStorage.getItem('doors'));
    }

    public getDoorById(doorId: string) {
        const allDoors = this.getAllDoors();
        const requiredDoor = allDoors.find((door: Door) => door.id === doorId)
        return requiredDoor;
    }

    public updateDoor(doorToUpdate: Door) {
        const doors = JSON.parse(localStorage.getItem('doors')) as Door[];
        const index = doors.findIndex(door => door.id === doorToUpdate.id);
        if(index !== -1) {
            doors[index] = doorToUpdate;
            localStorage.setItem('doors', JSON.stringify(doors));
        }
    }

    public setupDoors(doorsCount: number) {
        const doors = this.createDoorsWithComponentsInstances(doorsCount);
		localStorage.setItem("doors", JSON.stringify(doors));
    }

    public setupObjectState() {

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
        const door = {} as DoorWithComponents;
        door.name = `Дверь ${doorId}`;
        door.id = doorId.toString();
        door.components = {} as DoorComponents;
    
        return door;
    };



}

export const doorsAPI = new DoorsAPI();

