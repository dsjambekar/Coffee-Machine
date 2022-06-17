import disposableCup from "../disposablecup.jpg";
import money from "../money.png";
import Fill from "./fill";

export default function Remaining(props) {
	return (
		<div className="remaining">
			<div className="remaining-container">
				<div className="remaining-water-container-bg"></div>
				<div
					className="remaining-water-container-overlap"
					style={{ height: (1 - props.water.quantity / 1000) * 55 }}
				></div>
				<div className="remaining-label">{props.water.quantity} ml</div>
				<div
					onClick={() => props.fillIngredients(props.water)}
					className={
						props.water.isFilled
							? "animation-fill-button"
							: "fill-button"
					}
					dangerouslySetInnerHTML={{
						__html: props.water.isFilled ? "&#10004;" : "Fill",
					}}
				></div>
			</div>

			<div className="remaining-container">
				<div className="remaining-milk-container-bg"></div>
				<div
					className="remaining-milk-container-overlap"
					style={{ height: (1 - props.milk.quantity / 1000) * 55 }}
				></div>
				<div className="remaining-label">{props.milk.quantity} ml</div>
				<div
					onClick={() => props.fillIngredients(props.milk)}
					className={
						props.milk.isFilled
							? "animation-fill-button"
							: "fill-button"
					}
					dangerouslySetInnerHTML={{
						__html: props.milk.isFilled ? "&#10004;" : "Fill",
					}}
				></div>
			</div>

			<div className="remaining-container">
				<div className="remaining-beans-container-bg"></div>
				<div
					className="remaining-beans-container-overlap"
					style={{ height: (1 - props.beans.quantity / 1000) * 55 }}
				></div>
				<div className="remaining-label">{props.beans.quantity} gm</div>
				<div
					onClick={() => props.fillIngredients(props.beans)}
					className={
						props.beans.isFilled
							? "animation-fill-button"
							: "fill-button"
					}
					dangerouslySetInnerHTML={{
						__html: props.beans.isFilled ? "&#10004;" : "Fill",
					}}
				></div>
			</div>

			<div className="remaining-container">
				<img
					className="remaining-disposable-cup-image"
					src={disposableCup}
				></img>
				<div className="remaining-label-disposable-cup">
					{props.disposableCups.quantity}
				</div>
				<div
					onClick={() => props.fillIngredients(props.disposableCups)}
					className={
						props.disposableCups.isFilled
							? "animation-fill-button"
							: "fill-button"
					}
					dangerouslySetInnerHTML={{
						__html: props.disposableCups.isFilled
							? "&#10004;"
							: "Fill",
					}}
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
