import { Door } from "../interfaces/Door.interface";

class DoorsAPI {
    public getAllDoors() {
        const doorsWithComponents = JSON.parse(localStorage.getItem('doors'));
        return doorsWithComponents.map(doorWithComponents => {
            const { components, ...otherProps } = doorWithComponents;
            return otherProps;
        });
    }

    public getAllDoorsWithItsComponents() {
        return JSON.parse(localStorage.getItem('doors'));
    }

    public getDoorById(doorId: string) {
        const allDoors = this.getAllDoors();
        const requiredDoor = allDoors.find((door: Door) => door.id === doorId)
        return requiredDoor;
    }

}

export const doorsAPI = new DoorsAPI();

