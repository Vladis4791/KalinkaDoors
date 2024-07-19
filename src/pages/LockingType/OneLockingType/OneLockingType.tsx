import React, { useState } from "react";
import QuestionTemplate from "../../../components/QuestionTemplate/QuestionTemplate";
import { LockingType } from "../../../interfaces/DoorComponents.interface";
import RadioButton from "../../../components/RadioButton/RadioButton";

const OneLockingType = () => {

    const [lockingType, setLockingType] = useState<LockingType>(LockingType.TURN_BUTTON);

    const onSubmit = () => {

    }

	return (
		<QuestionTemplate
			questionName="Настройка типа фиксации на всем объекте"
			questionDescription="Выберите двери для всего объекта"
			previousPageRoute="/fixationTypeSelection"
			nextPageRoute="/doorsWithLockingSelection"
			onSubmit={onSubmit}
		>
			<>
				<RadioButton
					radioButtonName="Заворотка"
					groupName="lockingTypeOnObject"
					checked={lockingType === LockingType.TURN_BUTTON}
					onChange={() =>
						setLockingType(LockingType.TURN_BUTTON)
					}
				/>
				<RadioButton
					radioButtonName="Ключ фиксатор"
					groupName="lockingTypeOnObject"
					checked={lockingType === LockingType.KEY_FIXATOR}
					onChange={() =>
						setLockingType(LockingType.KEY_FIXATOR)
					}
				/>
				<RadioButton
					radioButtonName="Ключ с двух сторон"
					groupName="lockingTypeOnObject"
					checked={lockingType === LockingType.TWO_EDGED_KEY}
					onChange={() =>
						setLockingType(LockingType.KEY_FIXATOR)
					}
				/>
			</>
		</QuestionTemplate>
	);
};

export default OneLockingType;
