import React from "react";
import { useDoors } from "../../hooks/useDoors";
import { DoorComponents } from "../../interfaces/DoorComponents.interface";
import { summaryService } from "../../services/summaryService";
import Row from "./Row/Row";
import './Summary.scss';
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import SecondaryLink from "../../components/SecondaryLink/SecondaryLink";
import { addedComponentsAPI } from "../../APIs/addedComponents.api";
import * as SummaryInterface from "../../interfaces/Summary.interface";

const Summary = () => {
	const { doors } = useDoors();

	const components = summaryService.getSummary();
	const componentsNames = Object.keys(components);
	// const addedComponeny

	return (
		<div className="Summary">
			<div className="container">
                <h2>Итоговый список</h2>
                <div className="summaryList">
                    <div className="listHeader">
                        <div className="componentNameHeader">Название</div>
                        <div className="componentAmount">Количество</div>
                    </div>
                    {componentsNames.map((componentName) => (
					<Row
						componentName={componentName as keyof SummaryInterface.Summary}
						componentInitialValue={components[componentName]}
					/>
				))}
                </div>
                <PrimaryButton onClick={() => console.log("xmls file")} title="Скачать XML файл" />
                <SecondaryLink to="/doorsList">НАЗАД</SecondaryLink>
				
			</div>
		</div>
	);
};

export default Summary;
