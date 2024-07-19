import { LockingType } from "./DoorComponents.interface";

export interface LockingTypeState {
    shouldBeOneLockingTypeOnObject: boolean;
    oneLockingTypeOnObject: LockingType;
    doorsIdsThatRequiredLocking: string[];
}