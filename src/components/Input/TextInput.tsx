import React from "react";
import './TextInput.scss';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    inputRef?: React.MutableRefObject<HTMLInputElement>;
}

const TextInput = ({inputRef, ...props }: TextInputProps) => {
	return (
		<input
            {...props}
            className={`TextInput ${props.className}`}
			ref={inputRef}
		/>
	);
};

export default TextInput;
