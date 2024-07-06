enum FixationType {
    MAGNIT,
    TONGUE,
}

enum LockingType {

}

enum HandleType {

}

interface Dobor {
    width: number;
    height: number;
    count: number;
}

export interface DoorComponents {
    doorPanel: number;
    doorstep: number;
    fixationType: FixationType
    lockingType: LockingType
    handle: HandleType
    dobor: Dobor[]
    doorBox: number
    platband: number // possible change to PlatbandInterface
}