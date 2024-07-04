import React from "react";
import Button from "../Button/Button";
import './NextButton.scss';

const NextButton = ({ onClick, title }: { onClick: () => void, title: string }) => {
	return <Button onClick={onClick} className="nextButton">{ title }</Button>
};

export default NextButton;
