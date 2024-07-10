import React, { useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import { Door } from "../../../../interfaces/Door.interface";

const FixationSelectionResultBlock = ({
	tongueDoors,
	magnitDoors,
	onTongueDoorDelete,
	onMagnitDoorDelete,
	currentPanel,
}: {
	tongueDoors: Door[];
	magnitDoors: Door[];
	onTongueDoorDelete: () => void;
	onMagnitDoorDelete;
}) => {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<TabView
			className="SelectionResultBlock"
			activeIndex={activeIndex}
			onTabChange={(e) => setActiveIndex(e.index)}
		>
            <TabPanel header="Язычок"></TabPanel>
            <TabPanel header="Магнит"></TabPanel>
        </TabView>
	);
};

export default FixationSelectionResultBlock;
