import { Door } from "./Door.interface";

export interface LockingTypeState {
    oneLockingTypeOnObject: boolean;
    turnButtonLockingDoors: Door[];
    keyFixatorDoors: Door[];
    twoEdgedKeysDoors: Door[];
}