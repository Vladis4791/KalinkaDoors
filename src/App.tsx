import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import DoorsCounter from "./questions/DoorsCounter/DoorsCounter";
import DoorsList from "./pages/DoorsList/DoorsList";
import DoorType from "./pages/SpecificDoorQuestions/DoorType/DoorType";
import CurrentDoorSettings from "./pages/CurrentDoorSettings/CurrentDoorSettings";
import DoorStateQuestion from "./pages/SpecificDoorQuestions/DoorState/DoorState";
import Depth from "./pages/SpecificDoorQuestions/DoorSize/Depth";
import Width from "./pages/SpecificDoorQuestions/DoorSize/Width";
import Height from "./pages/SpecificDoorQuestions/DoorSize/Height";
import DoorstepSettings from "./pages/DoorstepSettings/DoorstepSettings";
import MainFixationTypePage from "./pages/FixationType/MainFixationTypePage";
import OneFixationTypeOnObjectSetting from "./pages/FixationType/OneFixationTypeOnObjectSetting/OneFixationTypeOnObjectSetting";
import DifferentFixationTypesOnObject from "./pages/FixationType/DifferentFixationTypesOnObject/DifferentFixationTypesOnObject";
import DoorsWithLockingSelection from "./pages/LockingType/DoorsWithLockingSelection/DoorsWithLockingSelection";
import DifferentLockingTypes from "./pages/LockingType/DifferentLockingTypes/DifferentLockingTypes";
import DoorSize from "./pages/SpecificDoorQuestions/DoorSize/DoorSize";
import OneLockingType from "./pages/LockingType/OneLockingType/OneLockingType";
import MainLockingTypePage from "./pages/LockingType/MainLockingTypePage";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="doorsCounter" element={<DoorsCounter />} />
				<Route path="doorsList" element={<DoorsList />} />
				<Route path="settings/:doorId" element={<CurrentDoorSettings />}>
					<Route path="type" element={<DoorType />} />
					<Route path="state" element={<DoorStateQuestion />} />
					<Route
						path="depth"
						element={
							<DoorSize
								dimension="depth"
								previousPageRoute="../state"
								nextPageRoute="../width"
							/>
						}
					/>
					<Route
						path="width"
						element={
							<DoorSize
								dimension="width"
								previousPageRoute="../depth"
								nextPageRoute="../height"
							/>
						}
					/>
					<Route
						path="height"
						element={
							<DoorSize
								dimension="height"
								previousPageRoute="../width"
								nextPageRoute="/doorsList"
							/>
						}
					/>
				</Route>
				<Route path="doorsteps" element={<DoorstepSettings />} />
				<Route path="fixationTypeSelection" element={<MainFixationTypePage />} />
				<Route path="oneFixationType" element={<OneFixationTypeOnObjectSetting />} />
				<Route
					path="differentFixationTypes"
					element={<DifferentFixationTypesOnObject />}
				/>
				<Route
					path="doorsWithLockingSelection"
					element={<DoorsWithLockingSelection />}
				/>

				<Route
					path="mainLockingPage"
					element={<MainLockingTypePage />}
				/>
				<Route
					path="differentLockingTypes"
					element={<DifferentLockingTypes />}
				/>

				<Route path="oneLockingType" element={<OneLockingType />} />
				<Route
					path="reinforcedHingesSelection"
					element={<DoorsWithLockingSelection />}
				/>
			</Routes>
		</div>
	);
}

export default App;
