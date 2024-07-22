import { doorsAPI } from "../APIs/doors.api";
import { FixationType, LockingType } from "../interfaces/DoorComponents.interface";
import { Summary } from "../interfaces/Summary.interface";

interface ComponentSummary {
	componentName: string;
	componentAmount: string;
}

const ComponentsNames = {
    doorsPanels: "Полотна",
	doorBoxes: "Коробки",
	doorsteps: "Пороги",
	tongueFixators: "Язычок",
	magnitFixators: "Магнит",
	handles: "Ручки",
	platbonds: "Наличники",
	turnButtons: "Заворотка",
	keyFixators: "Ключ фиксатор",
	twoEdgedKeys: "Ключ с двух сторон",
	hinges: "Петли",
}

class SummaryService {
	private doors = doorsAPI.getAllDoors();

    public getSummary = () => {
        const doorsComponents = this.doors.map((door) => door.components)

        const summary: Summary = {
            doorsPanels: doorsComponents.reduce((accum, item) => accum + item.doorPanel, 0),
            doorBoxes: doorsComponents.reduce((accum, item) => accum + item.doorBox, 0),
            doorsteps: doorsComponents.reduce((accum, item) => accum + item.doorstep, 0),
            tongueFixators: doorsComponents.filter(component => component.fixationType === FixationType.TONGUE).length,
            magnitFixators: doorsComponents.filter(component => component.fixationType === FixationType.MAGNIT).length,
            handles: 0,
            platbonds: 0,
            turnButtons: doorsComponents.filter(component => component.lockingType === LockingType.TURN_BUTTON).length,
            keyFixators: doorsComponents.filter(component => component.lockingType === LockingType.KEY_FIXATOR).length,
            twoEdgedKeys: doorsComponents.filter(component => component.lockingType === LockingType.TWO_EDGED_KEY).length,
            hinges: 0
        };

        return summary;
    }

}

export const summaryService = new SummaryService();
