import cappuccinoIcon from "../cappuccino-colored.png";
import cappuccinoOutlineIcon from "../cappuccino-outline.png";
import latte from "../latte-colored.png";
import espresso from "../espresso-colored.png";

export default function Buy(props) {
	return (
		<div className="buy-choice">
			<div
				className="coffee-choice"
				onClick={() => props.selectCoffee("Espresso", 4)}
			>
				<img src={espresso} />
				<h1 className="coffee-choice-label">Espresso</h1>
				<div className="coffee-choice-cost">
					$4<sup>.00</sup>
				</div>
			</div>
			<div
				className="coffee-choice"
				onClick={() => props.selectCoffee("Latte", 7)}
			>
				<img src={latte} />
				<h1>Latte</h1>
				<div className="coffee-choice-cost">
					$7<sup>.00</sup>
				</div>
			</div>
			<div
				className="coffee-choice"
				onClick={() => props.selectCoffee("cappuccino", 6)}
			>
				<img src={cappuccinoIcon} />
				<h1>Cappuccino</h1>
				<div className="coffee-choice-cost">
					$6<sup>.00</sup>
				</div>
			</div>
		</div>
	);
}
