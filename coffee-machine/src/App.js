import logo from "./logo.svg";
import "./App.css";
import Remaining from "./components/remaining";
import { useState, useEffect } from "react";

function App() {
	useEffect(() => {
		document.title = "Coffee Machine";
	}, []);

	const [ingredients, setIngredients] = useState({
		water: 700,
		milk: 465,
		beans: 300,
		disposableCups: 80,
		money: 755,
	});

	const [showBuy, setShowBuy] = useState(false);
	const [showFill, setShowFill] = useState(false);
	const [showTake, setShowTake] = useState(false);
	const [showRemaining, setShowRemaining] = useState(false);

	function toggleBuy() {
		setShowBuy((oldValue) => !oldValue);
		setShowFill(false);
		setShowTake(false);
		setShowRemaining(false);
	}

	function toggleFill() {
		setShowFill((oldValue) => !oldValue);
		setShowBuy(false);
		setShowTake(false);
		setShowRemaining(false);
	}

	function toggleTake() {
		setShowTake((oldValue) => !oldValue);
		setShowBuy(false);
		setShowFill(false);
		setShowRemaining(false);
	}

	function toggleRemaining() {
		setShowRemaining((oldValue) => !oldValue);
		setShowBuy(false);
		setShowFill(false);
		setShowTake(false);
	}

	return (
		<div className="App">
			<button onClick={toggleBuy}>Buy</button>
			<button onClick={toggleFill}>Fill</button>
			<button onClick={toggleTake}>Take</button>
			<button onClick={toggleRemaining}>Remaining</button>
			{showRemaining && (
				<Remaining
					water={ingredients.water}
					milk={ingredients.milk}
					disposableCups={ingredients.disposableCups}
					beans={ingredients.beans}
					money={ingredients.money}
				></Remaining>
			)}
		</div>
	);
}

export default App;
