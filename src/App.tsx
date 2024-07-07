import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import QuestionTemplate from "./components/QuestionTemplate/QuestionTemplate";
import DoorsCounter from "./questions/DoorsCounter/DoorsCounter";
import DoorsList from "./pages/DoorsList/DoorsList";
import DoorType from "./pages/SpecificDoorQuestions/DoorType/DoorType";
import CurrentDoorSettings from "./pages/CurrentDoorSettings/CurrentDoorSettings";
import DoorStateQuestion from "./pages/SpecificDoorQuestions/DoorState/DoorState";
import DoorSize from "./pages/SpecificDoorQuestions/DoorSize/DoorSize";
import Depth from "./pages/SpecificDoorQuestions/DoorSize/Depth";
import Width from "./pages/SpecificDoorQuestions/DoorSize/Width";
import Height from "./pages/SpecificDoorQuestions/DoorSize/Height";
import DoorstepSettings from "./pages/DoorstepSettings/DoorstepSettings";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<HomePage />} />

				<Route path="doorsCounter" element={<DoorsCounter />} />
				<Route path="doorsList" element={<DoorsList />} />
				<Route
					path="settings/:doorId"
					element={<CurrentDoorSettings />}
				>
					<Route path="type" element={<DoorType />} />
					<Route path="state" element={<DoorStateQuestion />} />
					<Route path="depth" element={<Depth />} />
					<Route path="width" element={<Width />} />
					<Route path="height" element={<Height />} />
				</Route>
				<Route path="doorsStep" element={<DoorstepSettings />} />
				<Route
					path="fixationTypeSelection"
					element={<HomePage />}
				/>
				<Route path="oneFixationType" element={<HomePage />} />
				<Route
					path="differentFixationType"
					element={<HomePage />}
				/>
			</Routes>
		</div>
	);
}

export default App;
