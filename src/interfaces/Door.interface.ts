import { DoorComponents } from "./DoorComponents.interface";

export interface Door {
    name: string;
    id: string;
    description?: string;
}

export interface DoorWithComponents extends Door {
    components: DoorComponents;
}