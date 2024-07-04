import React from "react";
import { useNavigate } from "react-router-dom";
import NextButton from "../NextButton/NextButton";
import PreviousButton from "../PreviousButton/PreviousButton";
import './QuestionTemplate.scss';

interface QuestionTemplateInterface {
	questionName: string;
	questionDescription?: string;
	nextPageRoute?: string;
	previousPageRoute?: string;
	onSubmit: () => void;
	children: React.ReactNode;
}

const QuestionTemplate = (props: QuestionTemplateInterface) => {
	const {
		questionName,
		questionDescription,
		nextPageRoute,
		previousPageRoute,
		children,
	} = props;

	const navigate = useNavigate();

	const onNextPage = () => {
		navigate(nextPageRoute);
	};

	const onSubmit = () => {
		// navigate(previousPageRoute);
	};

	return (
		<div className="QuestionTemplate">
			<div className="container">
				<div className="questionHeader">
					<h2>{questionName}</h2>
					<p>{questionDescription}</p>
				</div>
				<div className="questionContent">{children}</div>
				<div className="questionButtons">
					<PreviousButton onClick={onSubmit} title="Назад" />
					<NextButton onClick={onNextPage} title="Далее" />
				</div>
			</div>
		</div>
	);
};

export default QuestionTemplate;
