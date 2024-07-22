import React, { useEffect } from "react";
import "./NumberInput.scss";
import { InputNumber } from "primereact/inputnumber";
import "./NumberInput.scss";

const NumberInput = ({
	value,
	onChange,
	min,
	max,
	fractionDigits = 0,
	inputLabel,
}: {
	value: number;
	onChange: (value: number) => void;
	min: number;
	max: number;
	fractionDigits?: number;
	inputLabel?: string;
}) => {
	return (
		<div className="NumberInputBlock">
			<InputNumber
				inputId={inputLabel}
				value={value}
				onValueChange={(e) => onChange(e.value)}
				min={min}
				max={max}
				maxFractionDigits={fractionDigits}
				className="numberInput"
			/>
			{inputLabel ? (
				<label className="inputLabel" htmlFor={inputLabel}>
					{inputLabel}
				</label>
			) : null}
		</div>
	);
};

export default NumberInput;
