import React, { useEffect, useState } from "react";
import QuestionTemplate, {
	QuestionTemplateInterface,
} from "../../../components/QuestionTemplate/QuestionTemplate";
import NumberInput from "../../../components/NumberInput/NumberInput";
import { useOutletContext } from "react-router-dom";
import { Door } from "../../../interfaces/Door.interface";
import { DoorState } from "../../../interfaces/DoorComponents.interface";
import { doorsAPI } from "../../../APIs/doors.api";

// TODO сделать через labels questionNames and imageURLs

const RussianNamesOfDimension = {
	width: "Ширина",
	height: "Высота",
	depth: "Глубина",
};

interface DoorSizeProps {
	imageURL?: string;
	dimension: "width" | "height" | "depth";
    helpText?: string,
	previousPageRoute: string;
	nextPageRoute: string;
}

const DoorSize = (props: DoorSizeProps) => {
	const { imageURL, dimension, previousPageRoute, nextPageRoute } =
		props;

	const [length, setLength] = useState(1);

    const door = useOutletContext<Door>();

    useEffect(() => {
        const initialValue = door?.doorInfo.size[dimension] ?? 1;
        setLength(initialValue);
    }, [dimension, door]);



	const doorState = door?.doorInfo.currentState as DoorState;

	const onSubmit = () => {
		door.doorInfo.size[dimension] = length;
		doorsAPI.updateDoor(door);
	};

    const makeDimensionInGenetiveCase = () => {
        return `${RussianNamesOfDimension[dimension].toLowerCase().slice(0, -1)}y`;
    }

    const dimenstionOfWhat = doorState === DoorState.DOOR_IS_SET ? "дверного полотна" : "дверного проема";

	return (
		<QuestionTemplate
            settingsSectionName={`Настройка двери "${door?.name ?? ""}"`}
			questionName={`Померьте ${makeDimensionInGenetiveCase()} ${dimenstionOfWhat}`}
			previousPageRoute={previousPageRoute}
			nextPageRoute={nextPageRoute}
			onSubmit={onSubmit}
		>
			<NumberInput
                key={dimension}
				value={length}
				onChange={setLength}
				min={1}
				max={500}
				fractionDigits={1}
				inputLabel={`${RussianNamesOfDimension[dimension]} ${dimenstionOfWhat}`}
			/>
		</QuestionTemplate>
	);
};

export default DoorSize;
