import coffeeCup from "./giphy.gif";
import "./App.css";
import { useState, useEffect } from "react";
import Buy from "./components/Buy";
import adminIcon from "./admin_panel_settings.svg";
import Invoice from "./components/Invoice";

function App() {
	useEffect(() => {
		document.title = "Coffee Machine";
	}, []);

	const [selectedFunction, setSelectedFunction] = useState("");

	const [selectedCoffee, setSelectedCoffee] = useState(null);
	const [coffeePrice, setCoffeePrice] = useState(null);

	function selectCoffee(coffee, price) {
		console.log(coffee);
		setSelectedCoffee(coffee);
		setCoffeePrice(price);
		setSelectedFunction("Invoice");
	}

	return (
		<div className="App">
			{selectedFunction === "" && (
				<div className="buy-a-coffee">
					<h2>Buy a Coffee?</h2>
					<img
						src={coffeeCup}
						height="250px"
						width="250px"
						style={{ margin: "auto" }}
					/>
					<button
						style={{
							backgroundColor: "black",
							color: "white",
							border: "1px solid white",
							margin: "auto",
							height: "50px",
							width: "150px",
						}}
						onClick={() => setSelectedFunction("Buy")}
					>
						Yes
					</button>
				</div>
			)}
			{selectedFunction === "Buy" && <Buy selectCoffee={selectCoffee} />}
			{selectedFunction === "Invoice" && (
				<Invoice coffee={selectedCoffee} price={coffeePrice} />
			)}
			{/* <button
				style={{
					border: "1px solid skyblue",
					background: "grey",
					color: "white",
					// position: "fixed",
					// bottom: "10px",
					// width: "100px",
					margin: "auto",
				}}
			>
				<img src={adminIcon} height="20px" /> Admin
			</button> */}
		</div>
	);
}

export default App;
