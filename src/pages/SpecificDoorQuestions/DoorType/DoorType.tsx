import React, { useEffect, useState } from "react";
import QuestionTemplate from "../../../components/QuestionTemplate/QuestionTemplate";
import RadioButton from "../../../components/RadioButton/RadioButton";
import { useOutletContext, useParams } from "react-router-dom";
import { Door } from "../../../interfaces/Door.interface";

enum DoorVariation {
	FRONT_DOOR,
	INTERIOR_DOOR,
}

const DoorType = () => {
	const [doorVariation, setDoorVariation] = useState<DoorVariation>(null);

    const door = useOutletContext<Door>();

    useEffect(() => {
        console.log("rerender");
    })

	return (
		<QuestionTemplate
			questionName="Выберите тип двери"
			onSubmit={() => {}}
            settingsSectionName={`Настройка двери ${door ? `"Дверь ${door.id}` : ""}"`}
            nextPageRoute={`/settings/${door?.id}/state`}
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
				onChange={() => setDoorVariation(DoorVariation.INTERIOR_DOOR)}
			/>
		</QuestionTemplate>
	);
};

export default DoorType;
