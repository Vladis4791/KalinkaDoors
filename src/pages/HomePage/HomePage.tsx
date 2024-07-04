import React from "react";
import "./HomePage.scss";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import NextButton from "../../components/NextButton/NextButton";

const HomePage = () => {
	const navigate = useNavigate();

	return (
		<div className="HomePage">
			<div className="container">
				<div className="HomePageContent">
					<img src="" alt="" className="calculationImage" />
					<h2 className="homePageHeader">Калькулятор дверей</h2>
					<p>
						Калькулятор дверей позволяет получить всю
						информацию о количестве необходимых составляющих
						для установки дверей.
					</p>
                    <NextButton onClick={() => navigate("doorsCounter")} title="Начать" />
				</div>
			</div>
		</div>
	);
};

export default HomePage;
