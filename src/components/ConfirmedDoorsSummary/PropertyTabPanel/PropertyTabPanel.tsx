import { TabPanel } from "primereact/tabview";
import React from "react";
import { Door } from "../../../interfaces/Door.interface";

const PropertyTabPanel = ({
	propertyValue,
	doorsWithPropertyValue,
}: {
	propertyValue: string;
	doorsWithPropertyValue: Door[];
}) => {
	return (
		<TabPanel header={propertyValue}>
            
		</TabPanel>
	);
};

export default PropertyTabPanel;
