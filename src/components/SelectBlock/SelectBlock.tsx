import React from "react";
import Select from "../Select/Select";
import IconButton from "../IconButton/IconButton";
import help from "../../assets/help.svg";
import "./SelectBlock.scss";

const SelectBlock = (props: {
	selectLabel: string;
	options: string[];
	value: string;
	onChange: (option: string) => void;
}) => {
	const { selectLabel, ...selectProps } = props;

	return (
		<div className="SelectBlock">
			<div className="selectLabel">{selectLabel}</div>
			<Select {...selectProps} />
			<div className="helpIcon">
				<IconButton
					iconURL={help}
					onClick={() => console.log("modal with ")}
				/>
			</div>
		</div>
	);
};

export default SelectBlock;
