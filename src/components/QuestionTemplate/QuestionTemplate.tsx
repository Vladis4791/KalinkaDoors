import React from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import SecondaryButton from "../SecondaryButton/SecondaryButton";
import "./QuestionTemplate.scss";
import IconButton from "../IconButton/IconButton";
import close from "../../assets/close.svg";

interface QuestionTemplateInterface {
	questionName: string;
	questionDescription?: string;
	nextPageRoute?: string;
	settingsSectionName?: string;
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
		settingsSectionName = questionName,
		children,
		onSubmit,
	} = props;

	const navigate = useNavigate();

	const onNextPage = () => {
		navigate(nextPageRoute);
	};

	return (
		<div className="QuestionTemplate">
			<div className="container">
				<div className="settingsSection">
					<div className="settingsSectionName">
						{settingsSectionName}
					</div>
					<IconButton
						iconURL={close}
						onClick={() => {
							// TODO ARE YOU SURE YOU WANT TO LOSE ALL DATA YOU ENTERED
						}}
					/>
				</div>
				<div className="questionTemplateWrapper">
					<div className="questionContent">
						<div className="questionHeader">
							<h2 className="questionName">
								{questionName}
							</h2>
							<p className="questionDescription">
								{questionDescription}
							</p>
						</div>
						<div className="question">{children}</div>
						<div className="questionButtons">
							<SecondaryButton
								className="controlButton"
								onClick={() => {}}
								title="Назад"
							/>
							<PrimaryButton
								className="controlButton"
								onClick={onSubmit}
								title="Далее"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default QuestionTemplate;
