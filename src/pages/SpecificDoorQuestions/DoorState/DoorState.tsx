import React, { useEffect, useState } from "react";
import QuestionTemplate from "../../../components/QuestionTemplate/QuestionTemplate";
import RadioButton from "../../../components/RadioButton/RadioButton";
import { useOutletContext } from "react-router-dom";
import { Door } from "../../../interfaces/Door.interface";
import { DoorState } from "../../../interfaces/DoorComponents.interface";
import { doorsAPI } from "../../../APIs/doors.api";



const DoorStateQuestion = () => {
	const [currentDoorState, setCurrentDoorState] = useState<DoorState>(null);

    const door = useOutletContext<Door>();
    // TODO add images of doorway and doors

    useEffect(() => {
        const initialValue = door?.doorInfo.currentState ?? null;
        setCurrentDoorState(initialValue);
    }, [door]);

    const onSubmit = () => {
        door.doorInfo.currentState = currentDoorState;
        doorsAPI.updateDoor(door);
    }

	return (
		<QuestionTemplate
			questionName="Состояние дверного пространства"
			onSubmit={onSubmit}
            nextPageRoute="../depth"
            previousPageRoute="../type"
            settingsSectionName={`Настройка двери "${door?.name ?? ""}"`}
            isLoading={!door}
		>
			<RadioButton
				radioButtonName="Дверь установлена в проем"
				groupName="doorState"
				checked={currentDoorState === DoorState.DOOR_IS_SET}
                onChange={() => setCurrentDoorState(DoorState.DOOR_IS_SET)}
			/>
			<RadioButton
				radioButtonName="Есть только пустой проем"
				groupName="doorState"
				checked={currentDoorState === DoorState.PLAIN_DOORWAY}
                onChange={() => setCurrentDoorState(DoorState.PLAIN_DOORWAY)}
			/>
		</QuestionTemplate>
	);
};

export default DoorStateQuestion;
