import { Door } from "../interfaces/Door.interface";
import { LockingType } from "../interfaces/DoorComponents.interface";
import { LockingTypeState } from "../interfaces/LockingTypeState.interface";
import { Storage } from "./storage.api";

class LockingTypeStateAPI {
	private storage = new Storage<LockingTypeState>("lockingTypeState");

	public getLockingTypeState() {
		return this.storage.getObject();
	}

	public setShouldBeOneFixationTypeOnObject(value: boolean) {
		this.storage.set("oneLockingTypeOnObject", value);
	}

	public setDoorsIdsThatRequiredLocking(doors: string[]) {
		this.storage.set("doorsIdsThatRequiredLocking", doors);
	}

	public setupLockingTypeState() {
		const newSetupLockingTypeState: LockingTypeState = {
			oneLockingTypeOnObject: LockingType.TURN_BUTTON,
			shouldBeOneLockingTypeOnObject: true,
			doorsIdsThatRequiredLocking: [],
		};

		this.storage.writeObject(newSetupLockingTypeState);
	}
}

export const lockingTypeStateAPI = new LockingTypeStateAPI();
