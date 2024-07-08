import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import "./Select.scss";

interface SelectProps {
	options: string[];
	value: string;
	onChange: (option: string) => void;
}

const Select = (props: SelectProps) => {
	const { value, options, onChange } = props;

	return (
		<Dropdown
			className="Select"
			value={value}
			onChange={(e) => onChange(e.value)}
			options={options}
		/>
	);
};

export default Select;
