import { useState } from "react";
import disposableCup from "../disposablecup.jpg";
import money from "../money.png";
import Fill from "./fill";

export default function Remaining(props) {
	const [ingredients, setIngredients] = useState(props.ingredients);

	function fillIngredients() {}

	return (
		<div className="remaining">
			<div className="remaining-container">
				<div className="remaining-water-container-bg"></div>
				<div
					className="remaining-water-container-overlap"
					style={{
						height:
							(1 - props.ingredients.water.quantity / 1000) * 55,
					}}
				></div>
				<div className="remaining-label">
					{props.ingredients.water.quantity} ml
				</div>
				<div
					onClick={() =>
						props.fillIngredients(props.ingredients.water)
					}
					// className={
					// 	props.ingredients.water.isFilled
					// 		? "animation-fill-button"
					// 		: "fill-button"
					// }
					// dangerouslySetInnerHTML={{
					// 	__html: props.ingredients.water.isFilled
					// 		? "&#10004;"
					// 		: "Fill",
					// }}
				></div>
			</div>

			<div className="remaining-container">
				<div className="remaining-milk-container-bg"></div>
				<div
					className="remaining-milk-container-overlap"
					style={{
						height:
							(1 - props.ingredients.milk.quantity / 1000) * 55,
					}}
				></div>
				<div className="remaining-label">
					{props.ingredients.milk.quantity} ml
				</div>
				<div
					onClick={() =>
						props.fillIngredients(props.ingredients.milk)
					}
					// className={
					// 	props.ingredients.milk.isFilled
					// 		? "animation-fill-button"
					// 		: "fill-button"
					// }
					// dangerouslySetInnerHTML={{
					// 	__html: props.ingredients.milk.isFilled
					// 		? "&#10004;"
					// 		: "Fill",
					// }}
				></div>
			</div>

			<div className="remaining-container">
				<div className="remaining-beans-container-bg"></div>
				<div
					className="remaining-beans-container-overlap"
					style={{
						height:
							(1 - props.ingredients.coffee.quantity / 1000) * 55,
					}}
				></div>
				<div className="remaining-label">
					{props.ingredients.coffee.quantity} gm
				</div>
				<div
					onClick={() =>
						props.fillIngredients(props.ingredients.coffee)
					}
					// className={
					// 	props.ingredients.coffee.isFilled
					// 		? "animation-fill-button"
					// 		: "fill-button"
					// }
					// dangerouslySetInnerHTML={{
					// 	__html: props.ingredients.coffee.isFilled
					// 		? "&#10004;"
					// 		: "Fill",
					// }}
				></div>
			</div>

			<div className="remaining-container">
				<img
					className="remaining-disposable-cup-image"
					src={disposableCup}
				></img>
				<div className="remaining-label-disposable-cup">
					{props.ingredients.cups.quantity}
				</div>
				<div
				// onClick={() => props.fillIngredients(props.disposableCups)}
				// className={
				// 	props.ingredients.cups.isFilled
				// 		? "animation-fill-button"
				// 		: "fill-button"
				// }
				// dangerouslySetInnerHTML={{
				// 	__html: props.disposableCups.isFilled
				// 		? "&#10004;"
				// 		: "Fill",
				// }}
				></div>
			</div>

			{/* <div className="remaining-container">
				<img
					className="remaining-disposable-cup-image"
					src={money}
				></img>
				<div className="remaining-label-disposable-cup">756$</div>
			</div> */}
			{/* 
			<div className="jar-parent">
				<div className="jar-body" />
				<div className="jar-left-cut" />
				<div className="jar-right-cut" />
				<div className="jar-mouth" />
			</div> */}
		</div>
	);
}
