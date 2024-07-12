import React, { useState } from "react";
import "./QuestionTemplate.scss";
import IconButton from "../IconButton/IconButton";
import close from "../../assets/close.svg";
import Loading from "../Loading/Loading";
import PrimaryLink from "../PrimaryLink/PrimaryLink";
import SecondaryLink from "../SecondaryLink/SecondaryLink";

export interface QuestionTemplateInterface {
	questionName: string;
	questionDescription?: string;
	nextPageRoute: string;
	previousPageRoute: string;
	settingsSectionName?: string;
	onSubmit: () => void;
	children: React.ReactNode;
	fixedBlock?: React.ReactNode;
	questionFixedInSize?: boolean;
	isLoading?: boolean;
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
		fixedBlock,
		questionFixedInSize = false,
		isLoading = false,
	} = props;

	return (
		<div className="QuestionTemplate">
			{!isLoading ? (
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
								{questionDescription ? (
									<p className="questionDescription">
										{questionDescription}
									</p>
								) : null}
							</div>
							<div
								className={`question ${questionFixedInSize ? "fixedQuestionBlock" : ""}`}
							>
								{children}
							</div>
							<div className="fixed">{fixedBlock}</div>
							<div className="questionButtons">
								<SecondaryLink
									className="controlButton"
									to={previousPageRoute}
								>
									Назад
								</SecondaryLink>
								<PrimaryLink
									className="controlButton"
									to={nextPageRoute}
									onClick={onSubmit}
								>
									Далее
								</PrimaryLink>
							</div>
						</div>
					</div>
				</div>
			) : (
				<Loading />
			)}
		</div>
	);
};

export default QuestionTemplate;
