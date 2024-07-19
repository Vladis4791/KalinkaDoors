import React from "react";
import checkedImg from "../../assets/checked.svg";
import deleteImg from "../../assets/delete.svg";
import "./Checkbox.scss";

const Checkbox = ({
	checked,
	checkboxContent,
	onChange,
}: {
	checked: boolean;
	onChange: () => void;
	checkboxContent: string;
}) => {
	return (
		<label className="checkboxBlock">
			<input type="checkbox" className="checkbox" checked={checked} onChange={onChange} />
			<div
				className={`checkboxContent`}
			>
				<div className="checkboxName">{checkboxContent}</div>
				{checked ? (
					<img src={checkedImg} />
				) : null}
			</div>
		</label>
	);
};

export default Checkbox;
