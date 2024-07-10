import { Door } from "../interfaces/Door.interface";
import { LockingTypeState } from "../interfaces/LockingTypeState.interface";
import { Storage } from "./storage.api";

class LockingTypeStateAPI {
	private storage = new Storage<LockingTypeState>("lockingTypeState");

	public getLockingTypeState() {
		return this.storage.getObject();
	}

	public setDoorsThatRequiredLocking(doors: Door[]) {
		this.storage.set("doorsThatRequiredLocking", doors);
	}

	public setTurnButtonLockingDoorsIds(doorsIds: string[]) {
		this.storage.set("turnButtonLockingDoorsIds", doorsIds);
	}

	public setKeyFixatorDoorsIds(doorsIds: string[]) {
		this.storage.set("keyFixatorDoorsIds", doorsIds);
	}

	public setTwoEdgedKeysDoorsIds(doorsIds: string[]) {
		this.storage.set("twoEdgedKeysDoorsIds", doorsIds);
	}

	public setupLockingTypeState() {
		const newSetupLockingTypeState: LockingTypeState = {
			oneLockingTypeOnObject: true,
			doorsThatRequiredLocking: [],
			turnButtonLockingDoorsIds: [],
			keyFixatorDoorsIds: [],
			twoEdgedKeysDoorsIds: [],
		};

		this.storage.writeObject(newSetupLockingTypeState);
	}

	public resetDoorsIds() {
		this.setTurnButtonLockingDoorsIds([]);
        this.setKeyFixatorDoorsIds([]);
        this.setTwoEdgedKeysDoorsIds([]);
	}
}

export const lockingTypeStateAPI = new LockingTypeStateAPI();
