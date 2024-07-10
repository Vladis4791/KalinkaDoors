import { FixationTypeState } from "../interfaces/FixationTypeState.interface";

class FixationTypesStateAPI {

    private fixationTypeState: FixationTypeState = JSON.parse(localStorage.getItem('fixationTypeState')) as FixationTypeState;

    public getFixationTypeState() {
        return this.fixationTypeState;
    }

    private fixationTypeStateSetter(property: string, value: unknown) {
        this.fixationTypeState[property] = value;
        localStorage.setItem('fixationTypeState', JSON.stringify(this.fixationTypeState));
    }

    public setShouldBeOneFixationTypeOnObject(value: boolean) {
        this.fixationTypeStateSetter("oneFixationTypeOnObject", value);
    }

    public setTongueDoorsIds(doorsIds: string[]) {
        this.fixationTypeStateSetter("tongueDoorsIds", doorsIds);
    }

    public setMagnitDoorsIds(doorsIds: string[]) {
        this.fixationTypeStateSetter("magnitDoorsIds", doorsIds);
    }

    public SetupFixationTypeState() {
		this.fixationTypeState = {
			oneFixationTypeOnObject: true,
			tongueDoorsIds: [],
			magnitDoorsIds: [],
		};
  
        localStorage.setItem('fixationTypeState', JSON.stringify(this.fixationTypeState));
	}

    public resetDoorsIds() {
        this.setMagnitDoorsIds([]);
        this.setTongueDoorsIds([]);
    }

}

export const fixationTypesStateAPI = new FixationTypesStateAPI();