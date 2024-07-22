import { InputNumber } from "primereact/inputnumber";
import React, { useRef, useState } from "react";
import "./Row.scss";
import right from '../../../assets/right.svg'
import { addedComponentsAPI } from "../../../APIs/addedComponents.api";
import { Summary } from "../../../interfaces/Summary.interface";


const Row = ({
	componentName,
	componentInitialValue,
}: {
	componentName: keyof Summary;
	componentInitialValue: number;
}) => {
	const [value, setValue] = useState(componentInitialValue);

    const initialValue = useRef(componentInitialValue);

    const onChange = (value: number) => {
        addedComponentsAPI.setComponent(componentName, value - initialValue.current)
        setValue(value);
    }

	return (
		<div className="tableRow">
			<div className="componentName">{componentName}</div>
			<div className="componentAmount">
				<InputNumber
					value={value}
					onValueChange={(e) => onChange(e.value)}
					showButtons
                    min={0}
                    buttonLayout="horizontal"
                    decrementButtonClassName="decreaseButton"
                    incrementButtonClassName="increaseButton"
                    incrementButtonIcon={<img src={right} />}
                    decrementButtonIcon={<img src={right} />}
                    className="addedComponentInput"
				/>
			</div>
		</div>
	);
};

export default Row;
