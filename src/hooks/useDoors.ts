import { useEffect, useState } from "react";
import { Door } from "../interfaces/Door.interface";
import { doorsAPI } from "../APIs/doors.api";

export const useDoors = () => {
	return doorsAPI.getAllDoors() as Door[];
};
