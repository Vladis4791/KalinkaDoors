import { Door } from "./Door.interface";

export interface LockingTypeState {
    oneLockingTypeOnObject: boolean;
    doorsThatRequiredLocking: Door[];
    turnButtonLockingDoorsIds: string[];
    keyFixatorDoorsIds: string[];
    twoEdgedKeysDoorsIds: string[];
}