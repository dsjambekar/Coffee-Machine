import cappuccinoIcon from "../cappuccino-colored.png";
import cappuccinoOutlineIcon from "../cappuccino-outline.png";
import latte from "../latte-colored.png";
import espresso from "../espresso-colored.png";
import { useEffect, useState } from "react";
import CoffeeStatus from "./CoffeeStatus";

export default function Buy(props) {
	const [cappuccino, setCappuccino] = useState({
		coloredIcon: cappuccinoIcon,
		outlineIcon: cappuccinoOutlineIcon,
		isSelected: false,
	});

	const [cappuccinoIngredients, setCappuccinoIngredients] = useState([
		"Taking 200ml water.",
		"Adding 100ml milk to it.",
		"Adding 12g coffee.",
		"YOUR COFFEE IS READY!",
	]);

	const [coffeeStatus, setCoffeeStatus] = useState("");
	const [coffeePaid, setCoffeePaid] = useState(false);

	function selectCappuccino() {
		setCappuccino((oldValue) => {
			return { ...oldValue, isSelected: !oldValue.isSelected };
		});
	}
	return (
		<div className="buy-choice">
			<div className="coffee-choice">
				<img src={espresso} />
				<h1 className="coffee-choice-label">
					Espresso....................
				</h1>
				<div className="coffee-choice-cost">
					$4<sup>.00</sup>
				</div>
			</div>
			<div className="coffee-choice">
				<img src={latte} />
				<h1>Latte.......................</h1>
				<div className="coffee-choice-cost">
					$7<sup>.00</sup>
				</div>
			</div>
			<div className="coffee-choice" onClick={selectCappuccino}>
				<img
					src={
						cappuccino.isSelected
							? cappuccino.outlineIcon
							: cappuccino.coloredIcon
					}
				/>
				<h1>Cappuccino.................</h1>
				<div className="coffee-choice-cost">
					$6<sup>.00</sup>
				</div>
			</div>
		</div>
		// {cappuccino.isSelected && (
		// 	<div>
		// 		{!coffeePaid && (
		// 			<div>
		// 				<p>It costs $7.</p>
		// 				<button
		// 					onClick={() => {
		// 						setCoffeePaid(true);
		// 					}}
		// 				>
		// 					Pay
		// 				</button>
		// 			</div>
		// 		)}
		// 		{coffeePaid && (
		// 			<CoffeeStatus messages={cappuccinoIngredients} />
		// 		)}
		// 	</div>
		// )}
	);
}
