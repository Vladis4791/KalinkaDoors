import React from "react";
import "./RadioButton.scss";

const RadioButton = (props: {
	radioButtonName: string;
	checked: boolean;
	onChange: () => void;
	groupName: string;
	iconURL?: string;
}) => {
	const { radioButtonName, onChange, groupName, checked, iconURL } = props;

	return (
		<label className="RadioButtonBlock">
			<input
				className="RadioButton"
				onChange={onChange}
				type="radio"
				name={groupName}
				checked={checked}
				value={radioButtonName}
			/>
			<div className="label">
				{ iconURL ? <img src={iconURL} className="radioButtonImg" alt="" /> : null }
				<div className="radioButtonName">{radioButtonName}</div>
			</div>
		</label>
	);
};

export default RadioButton;
