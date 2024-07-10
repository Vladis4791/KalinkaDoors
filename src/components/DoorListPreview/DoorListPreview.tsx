import React from "react";
import { Door } from "../../interfaces/Door.interface";

const DoorListPreview = ({
	doors,
	onDoorDelete,
}: {
	doors: Door[];
	onDoorDelete: (door: Door) => void;
}) => {
	return <div className="DoorListPreview">
        
    </div>;
};

export default DoorListPreview;
