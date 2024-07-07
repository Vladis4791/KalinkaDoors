import React, { useState } from "react";
import QuestionTemplate from "../../../components/QuestionTemplate/QuestionTemplate";
import NumberInput from "../../../components/NumberInput/NumberInput";
import DoorSize from "./DoorSize";

const Width = () => {
	const [length, setLength] = useState(1);

	return (
		<DoorSize
			questionName="Померьте ширину дверного проема"
			russianDimensionName="Ширина"
			englishDimensionName="width"
			nextPageRoute="../height"
			previousPageRoute="../width"
			key="width"
            value={length}
            onChange={(value) => setLength(value)}
		/>
	);
};

export default Width;
