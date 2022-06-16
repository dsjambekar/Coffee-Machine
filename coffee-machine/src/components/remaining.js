import disposableCup from "../disposablecup.jpg";
import money from "../money.png";

export default function Remaining(props) {
	return (
		<div className="remaining">
			<div className="remaining-container">
				<div className="remaining-water-container-bg"></div>
				<div
					className="remaining-water-container-overlap"
					style={{ height: (1 - props.water / 1000) * 55 }}
				></div>
				<div className="remaining-label">{props.water} ml</div>
			</div>

			<div className="remaining-container">
				<div className="remaining-milk-container-bg"></div>
				<div
					className="remaining-milk-container-overlap"
					style={{ height: (1 - props.milk / 1000) * 55 }}
				></div>
				<div className="remaining-label">{props.milk} ml</div>
			</div>

			<div className="remaining-container">
				<div className="remaining-beans-container-bg"></div>
				<div
					className="remaining-beans-container-overlap"
					style={{ height: (1 - props.beans / 1000) * 55 }}
				></div>
				<div className="remaining-label">{props.beans} gm</div>
			</div>

			<div className="remaining-container">
				<img
					className="remaining-disposable-cup-image"
					src={disposableCup}
				></img>
				<div className="remaining-label-disposable-cup">
					{props.disposableCups}
				</div>
			</div>
			<div className="remaining-container">
				<img
					className="remaining-disposable-cup-image"
					src={money}
				></img>
				<div className="remaining-label-disposable-cup">
					{props.money} $
				</div>
			</div>
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
