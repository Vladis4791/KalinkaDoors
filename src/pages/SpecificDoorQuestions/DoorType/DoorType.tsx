import React, { useEffect, useState } from "react";
import QuestionTemplate from "../../../components/QuestionTemplate/QuestionTemplate";
import RadioButton from "../../../components/RadioButton/RadioButton";
import { useOutletContext } from "react-router-dom";
import { Door } from "../../../interfaces/Door.interface";
import { DoorVariation } from "../../../interfaces/DoorComponents.interface";
import { doorsAPI } from "../../../APIs/doors.api";

const DoorType = () => {
	const [doorVariation, setDoorVariation] = useState<DoorVariation>(null);

	const door = useOutletContext<Door>();

    useEffect(() => {
        const initialDoorVariation = door?.doorInfo.type ?? null;
        setDoorVariation(initialDoorVariation);
    }, [door]);

    const onSubmit = () => { 
        door.doorInfo.type = doorVariation;
        doorsAPI.updateDoor(door);
    }

	return (
		<QuestionTemplate
			questionName="Выберите тип двери"
			onSubmit={onSubmit}
			settingsSectionName={`Настройка двери ${door ? `"Дверь ${door.id}` : ""}"`}
			nextPageRoute={`../state`}
			previousPageRoute="/doorsList"
			isLoading={!door}
		>
			<RadioButton
				groupName="doorType"
				checked={doorVariation === DoorVariation.FRONT_DOOR}
				radioButtonName="Входная"
				onChange={() => setDoorVariation(DoorVariation.FRONT_DOOR)}
			/>
			<RadioButton
				groupName="doorType"
				checked={doorVariation === DoorVariation.INTERIOR_DOOR}
				radioButtonName="Межкомнатная"
				onChange={() =>
					setDoorVariation(DoorVariation.INTERIOR_DOOR)
				}
			/>
		</QuestionTemplate>
	);
};

export default DoorType;
