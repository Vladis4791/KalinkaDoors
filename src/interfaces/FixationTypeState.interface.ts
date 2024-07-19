import { Door } from "./Door.interface";
import { FixationType } from "./DoorComponents.interface";

export interface FixationTypeState {
    oneFixationTypeOnObject: FixationType;
    shouldBeOneFixationTypeOnObject: boolean;
}