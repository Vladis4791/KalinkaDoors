import React, { useState } from "react";
import QuestionTemplate from "../../../components/QuestionTemplate/QuestionTemplate";
import NumberInput from "../../../components/NumberInput/NumberInput";
import DoorSize from "./DoorSize";

const Height = () => {
	const [length, setLength] = useState(1);

	return (
		<DoorSize
			questionName="Померьте высоту дверного проема"
			russianDimensionName="Высота"
			englishDimensionName="height"
			nextPageRoute="../width"
			previousPageRoute="/doorsList"
            value={length}
            onChange={(value) => setLength(value)}
		/>
	);
};

export default Height;
