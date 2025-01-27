export enum FixationType {
	MAGNIT = "Магнит",
	TONGUE = "Язычок",
}

export enum DoorState {
	DOOR_IS_SET,
	PLAIN_DOORWAY,
}

export enum DoorVariation {
	FRONT_DOOR,
	INTERIOR_DOOR,
}

export enum LockingType {
	TURN_BUTTON = "Заворотка",
	KEY_FIXATOR = "Ключ фиксатор",
	TWO_EDGED_KEY = "Ключ с двух сторон",
}

export enum HandleType {}

interface Dobor {
	width: number;
	height: number;
	count: number;
}

export interface DoorComponents {
	doorPanel: number;
	doorstep: number;
	fixationType: FixationType;
	lockingType: LockingType;
	handle: HandleType;
	dobor: Dobor[];
	doorBox: number;
	platband: number; // TODO possible change to PlatbandInterface
}
