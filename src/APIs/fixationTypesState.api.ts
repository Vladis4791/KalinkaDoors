import { FixationType } from "../interfaces/DoorComponents.interface";
import { FixationTypeState } from "../interfaces/FixationTypeState.interface";
import { Storage } from "./storage.api";

class FixationTypesStateAPI {
	private storage = new Storage<FixationTypeState>("fixationTypeState");

	public getFixationTypeState() {
		return this.storage.getObject();
	}

	public setShouldBeOneFixationTypeOnObject(value: boolean) {
		this.storage.set("shouldBeOneFixationTypeOnObject", value);
	}

	public setOneFixationTypeOnObject(value: FixationType) {
		this.storage.set("oneFixationTypeOnObject", value);
	}

	public setupFixationTypeState() {
		const fixationTypeState: FixationTypeState = {
			oneFixationTypeOnObject: FixationType.TONGUE,
			shouldBeOneFixationTypeOnObject: true,
		};

		this.storage.writeObject(fixationTypeState);
	}
}

export const fixationTypesStateAPI = new FixationTypesStateAPI();
