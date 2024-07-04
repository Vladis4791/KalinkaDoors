import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import QuestionTemplate from "./components/QuestionTemplate/QuestionTemplate";
import DoorsCounter from "./questions/DoorsCounter/DoorsCounter";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<HomePage />} />

				<Route path="doorsCounter" element={<DoorsCounter />} />
				<Route path="doorsList" element={<HomePage />} />
				<Route path="settings/:doorId" element={<HomePage />}>
					<Route path="type" element={<HomePage />} />
					<Route path="state" element={<HomePage />} />
					<Route path="size" element={<HomePage />}>
						<Route path="height" element={<HomePage />} />
						<Route path="width" element={<HomePage />} />
						<Route path="depth" element={<HomePage />} />
					</Route>
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
