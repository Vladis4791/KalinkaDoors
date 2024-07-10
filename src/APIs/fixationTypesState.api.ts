import { FixationTypeState } from "../interfaces/FixationTypeState.interface";
import { Storage } from "./storage.api";

class FixationTypesStateAPI {
	private storage = new Storage<FixationTypeState>("fixationTypeState");

	public getFixationTypeState() {
		return this.storage.getObject();
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

export const fixationTypesStateAPI = new FixationTypesStateAPI();
