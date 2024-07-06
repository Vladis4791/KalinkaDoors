import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import QuestionTemplate from "./components/QuestionTemplate/QuestionTemplate";
import DoorsCounter from "./questions/DoorsCounter/DoorsCounter";
import DoorsList from "./pages/DoorsList/DoorsList";
import DoorType from "./pages/SpecificDoorQuestions/DoorType/DoorType";
import CurrentDoorSettings from "./pages/CurrentDoorSettings/CurrentDoorSettings";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<HomePage />} />

				<Route path="doorsCounter" element={<DoorsCounter />} />
				<Route path="doorsList" element={<DoorsList />} />
				<Route path="settings/:doorId" element={<CurrentDoorSettings />}>
					<Route path="type" element={<DoorType />} />
					<Route path="state" element={<HomePage />} />
					<Route path="size" element={<HomePage />} />
				</Route>
				<Route path="doorsStep" element={<HomePage />} />
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
