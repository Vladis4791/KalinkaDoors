import { DoorComponents, DoorState, DoorVariation } from "./DoorComponents.interface";

export interface Door {
	name: string;
	id: string;
	doorInfo: DoorInfo;
    components: DoorComponents;
}

export interface DoorInfo {
	type: DoorVariation;
	currentState: DoorState;
	size: DoorwaySize | DoorSize;
}

interface DoorwaySize {
	width: number;
	height: number;
	depth: number;
}

interface DoorSize {
	doorWidth: number;
	doorHeight: number;
	doorwayDepth: number;
}

export interface DoorWithComponents extends Door {
	components: DoorComponents;
	// doorInfo:
}

export interface DoorTotals extends DoorWithComponents, DoorInfo {}


