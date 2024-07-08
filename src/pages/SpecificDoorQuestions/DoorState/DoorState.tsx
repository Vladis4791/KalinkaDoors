import React, { useState } from "react";
import QuestionTemplate from "../../../components/QuestionTemplate/QuestionTemplate";
import RadioButton from "../../../components/RadioButton/RadioButton";
import { useOutletContext } from "react-router-dom";
import { Door } from "../../../interfaces/Door.interface";
import { DoorState } from "../../../interfaces/DoorComponents.interface";



const DoorStateQuestion = () => {
	const [currentDoorState, setCurrentDoorState] = useState<DoorState>(null);

    const door = useOutletContext<Door>();
    // TODO add images of doorway and doors
	return (
		<QuestionTemplate
			questionName="Состояние дверного пространства"
			onSubmit={() => {}}
            nextPageRoute={`/settings/${door?.id}/depth`}
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
