import React from "react";
import Select from "../Select/Select";
import IconButton from "../IconButton/IconButton";
import help from "../../assets/help.svg";
import "./SelectBlock.scss";
import IconButtonWithModal from "../IconButtonWIthModal/IconButtonWIthModal";

interface optionWithImages {
	optionName: string;
	imageURL: string;
}

const SelectBlock = (props: {
	selectLabel: string;
	optionsWithImages: optionWithImages[];
	value: string;
	onChange: (option: string) => void;
}) => {
	const { selectLabel, optionsWithImages, value, onChange } = props;
	const selectOptions = optionsWithImages.map((optionWithImage) => optionWithImage.optionName);

	const getImageURLByOptionName = (optionName: string) => {
		const optionWithImage = optionsWithImages.find(
			(optionWithImage) => optionWithImage.optionName === optionName
		);
		return optionWithImage.imageURL;
	};

	return (
		<div className="SelectBlock">
			<div className="selectLabel">{selectLabel}</div>
			<Select value={value} onChange={onChange} options={selectOptions} />
			<div className="helpIcon">
				<IconButtonWithModal
					iconURL={help}
					onClick={() => console.log(`modal with ${getImageURLByOptionName(value)}`)}
                    modalContent={<div>new P</div>}
				/>
			</div>
		</div>
	);
};

export default SelectBlock;
