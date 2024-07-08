import React, { useEffect, useState } from "react";
import QuestionTemplate from "../../../components/QuestionTemplate/QuestionTemplate";
import NumberInput from "../../../components/NumberInput/NumberInput";

const enum DoorDimension {
    WIDTH,
    HEIGHT,
    DEPTH
}

const DoorSize = (props: {
	questionName: string;
    inputLabel: string;
	imageURL?: string;
	nextPageRoute?: string;
	previousPageRoute?: string;
	onChange: (value: number) => void;
	value: number;
}) => {
	const {
		questionName,
        inputLabel,
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
		>
			<NumberInput
				value={value}
				onChange={onChange}
				min={1}
				max={500}
				fractionDigits={1}
				inputLabel={inputLabel}
			/>
		</QuestionTemplate>
	);
};

export default DoorSize;
