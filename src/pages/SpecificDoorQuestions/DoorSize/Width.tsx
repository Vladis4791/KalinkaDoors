import React, { useState } from "react";
import QuestionTemplate from "../../../components/QuestionTemplate/QuestionTemplate";
import NumberInput from "../../../components/NumberInput/NumberInput";
import DoorSize from "./DoorSize";

const Width = () => {
	const [length, setLength] = useState(1);

	return (
		<DoorSize
			questionName="Померьте ширину дверного проема"
            inputLabel="Ширина проема"
			nextPageRoute="../height"
			previousPageRoute="../depth"
			key="width"
            value={length}
            onChange={(value) => setLength(value)}
		/>
	);
};

export default Width;
