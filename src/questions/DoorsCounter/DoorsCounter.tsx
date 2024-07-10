import React, { useState } from "react";
import QuestionTemplate from "../../components/QuestionTemplate/QuestionTemplate";
import NumberInput from "../../components/NumberInput/NumberInput";
import { useNavigate } from "react-router-dom";
import { doorsAPI } from "../../APIs/doors.api";
import { fixationTypesStateAPI } from "../../APIs/fixationTypesState.api";
import { lockingTypeStateAPI as lockingTypesStateAPI } from "../../APIs/lockingTypesState.api";


const DoorsCounter = () => {
	const [doorsCount, setDoorsCount] = useState(0);
    
	const onSubmit = () => {
		doorsAPI.setupDoors(doorsCount);
        fixationTypesStateAPI.setupFixationTypeState();
        lockingTypesStateAPI.setupLockingTypeState();
	};

	return (
		<QuestionTemplate
			questionName="Введите количество дверей"
			onSubmit={onSubmit}
            nextPageRoute="/doorsList"
            previousPageRoute="/"
		>
			<NumberInput
				value={doorsCount}
				onChange={(value: number) => setDoorsCount(value)}
				min={1}
				max={20}
			/>
		</QuestionTemplate>
	);
};

export default DoorsCounter;
