import React from "react";
import "./HomePage.scss";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import calculate from "../../assets/calculate.svg";

const HomePage = () => {
	const navigate = useNavigate();

	return (
		<div className="HomePage">
			<div className="container">
				<div className="HomePageContent">
					<div>
						<img
							src={calculate}
							alt=""
							className="calculationImage"
						/>
						<h2 className="homePageHeader">
							Калькулятор дверей
						</h2>
						<p className="homePageDescription">
							Калькулятор дверей позволяет получить всю
							информацию о количестве необходимых
							составляющих для установки дверей.
						</p>
						<PrimaryButton
                            className="homePageButton"
							onClick={() => navigate("doorsCounter")}
							title="Начать"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
