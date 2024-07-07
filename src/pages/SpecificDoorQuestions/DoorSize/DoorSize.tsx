import React, { useEffect, useState } from "react";
import QuestionTemplate from "../../../components/QuestionTemplate/QuestionTemplate";
import NumberInput from "../../../components/NumberInput/NumberInput";

const DoorSize = (props: {
	questionName: string;
	russianDimensionName: string;
	englishDimensionName: string;
	imageURL?: string;
	nextPageRoute?: string;
	previousPageRoute?: string;
	onChange: (value: number) => void;
	value: number;
}) => {
	const {
		questionName,
		russianDimensionName: russianDimenstionName,
		englishDimensionName: englishDimenstionName,
		nextPageRoute,
		previousPageRoute,
		onChange,
		value,
	} = props;

	return (
		<QuestionTemplate
			questionName={questionName}
			nextPageRoute={nextPageRoute}
			previousPageRoute={previousPageRoute}
			onSubmit={() => {}}
			key={englishDimenstionName}
		>
			<NumberInput
				value={length}
				onChange={onChange}

				min={1}
				max={500}
				fractionDigits={1}
				inputLabel={`${russianDimenstionName} проема`}
			/>
		</QuestionTemplate>
	);
};

export default DoorSize;
