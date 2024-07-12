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
	size: Size;
}

interface Size {
    width: number;
	height: number;
	depth: number;
}

// interface DoorwaySize {
// 	width: number;
// 	height: number;
// 	depth: number;
// }

// interface DoorSize {
// 	doorWidth: number;
// 	doorHeight: number;
// 	doorwayDepth: number;
// }

