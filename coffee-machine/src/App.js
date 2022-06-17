import logo from "./logo.svg";
import "./App.css";
import Remaining from "./components/remaining";
import { useState, useEffect } from "react";
import FunctionButton from "./components/function-button";
import Fill from "./components/fill";

function App() {
	useEffect(() => {
		document.title = "Coffee Machine";
	}, []);

	// const [ingredients, setIngredients] = useState({
	// 	water: 700,
	// 	milk: 465,
	// 	beans: 300,
	// 	disposableCups: 80,
	// 	money: 755,
	// });

	const [ingredients, setIngredients] = useState([
		{ name: "water", quantity: 700, isFilled: false },
		{ name: "milk", quantity: 465, isFilled: false },
		{ name: "beans", quantity: 300, isFilled: false },
		{ name: "disposable", quantity: 80, isFilled: false },
	]);

	const [functions, setFunctions] = useState([
		{ name: "Buy", isSelected: false },
		{ name: "Fill", isSelected: false },
		{ name: "Take", isSelected: false },
		{ name: "Remaining", isSelected: false },
	]);

	const [showBuy, setShowBuy] = useState(false);
	const [showFill, setShowFill] = useState(false);
	const [showTake, setShowTake] = useState(false);
	const [showRemaining, setShowRemaining] = useState(false);

	function toggleBuy() {
		setShowBuy((oldValue) => !oldValue);
		setShowFill(false);
		setShowTake(false);
		setShowRemaining(false);
		updateFunctionsArray(0);
	}

	function toggleFill() {
		setShowFill((oldValue) => !oldValue);
		setShowBuy(false);
		setShowTake(false);
		setShowRemaining(false);
		updateFunctionsArray(1);
	}

	function toggleTake() {
		setShowTake((oldValue) => !oldValue);
		setShowBuy(false);
		setShowFill(false);
		setShowRemaining(false);
		updateFunctionsArray(2);
	}

	function toggleRemaining() {
		setShowRemaining((oldValue) => !oldValue);
		setShowBuy(false);
		setShowFill(false);
		setShowTake(false);

		updateFunctionsArray(3);
	}

	function updateFunctionsArray(index) {
		setFunctions((oldArray) => {
			let newArray = oldArray;
			newArray.map((f) => (f.isSelected = false));
			newArray[index].isSelected = true;
			return newArray;
		});
	}

	function fillIngredients(ingredient) {
		console.log(ingredient);
		setIngredients((oldArray) => {
			let newArray = [];
			for (let i = 0; i < oldArray.length; i++) {
				if (oldArray[i].name === ingredient.name) {
					var newIngredient = {
						name: ingredient.name,
						quantity: 1000,
						isFilled: true,
					};
					newArray.push(newIngredient);
				} else newArray.push(oldArray[i]);
			}
			return newArray;
		});
	}
	return (
		<div className="App">
			<div className="menu">
				<FunctionButton function={functions[0]} onClick={toggleBuy} />
				{/* <FunctionButton function={functions[1]} onClick={toggleFill} /> */}
				<FunctionButton function={functions[2]} onClick={toggleTake} />
				<FunctionButton
					function={functions[3]}
					onClick={toggleRemaining}
				/>
			</div>
			{showRemaining && (
				<Remaining
					fillIngredients={fillIngredients}
					water={ingredients[0]}
					milk={ingredients[1]}
					disposableCups={ingredients[2]}
					beans={ingredients[3]}
				></Remaining>
			)}
		</div>
	);
}

export default App;
