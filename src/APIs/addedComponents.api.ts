import { DoorComponents, FixationType } from "../interfaces/DoorComponents.interface";
import { FixationTypeState } from "../interfaces/FixationTypeState.interface";
import { Summary } from "../interfaces/Summary.interface";
import { Storage } from "./storage.api";

class AddedComponentsAPI {
	private storage = new Storage<Summary>("doorsComponents");
    // private addedComponents = this.getAddedComponents()

	public getAddedComponents() {
		return this.storage.getObject();
	}

	public setComponent(componentName: keyof Summary, value: number) {
        this.storage.set(componentName, value);
    }

    public rewriteAddedComponents(newAddedComponents: Summary) {
        this.storage.writeObject(newAddedComponents);
    }

	public setupAddedComponents() {
		const setupAddedComponents: Summary = {
			doorsPanels: 0,
			doorBoxes: 0,
			doorsteps: 0,
			tongueFixators: 0,
			magnitFixators: 0,
			handles: 0,
			platbonds: 0,
			turnButtons: 0,
			keyFixators: 0,
			twoEdgedKeys: 0,
			hinges: 0,
		};

        this.storage.writeObject(setupAddedComponents);
	}
}

export const addedComponentsAPI = new AddedComponentsAPI();
