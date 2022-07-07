import coffeeCup from "./giphy.gif";
import "./App.css";
import Remaining from "./components/remaining";
import { useState, useEffect } from "react";
import FunctionButton from "./components/function-button";
import Fill from "./components/fill";
import Buy from "./components/Buy";

/*
class Ingredients {
	int water;
	int milk;
	int coffee;
	int disposables;
}
 */

function App() {
	useEffect(() => {
		document.title = "Coffee Machine";
	}, []);

	// const [ingredients, setIngredients] = useState([
	// 	{ name: "water", quantity: 700, isFilled: false },
	// 	{ name: "milk", quantity: 465, isFilled: false },
	// 	{ name: "beans", quantity: 300, isFilled: false },
	// 	{ name: "disposable", quantity: 80, isFilled: false },
	// ]);

	const [ingredients, setIngredients] = useState({
		water: 1000,
		milk: 1000,
		coffee: 1000,
		cups: 250,
	});

	const [selectedFunction, setSelectedFunction] = useState("");

	// function fillIngredients(ingredient) {
	// 	console.log(ingredient);
	// 	setIngredients((oldArray) => {
	// 		let newArray = [];
	// 		for (let i = 0; i < oldArray.length; i++) {
	// 			if (oldArray[i].name === ingredient.name) {
	// 				var newIngredient = {
	// 					name: ingredient.name,
	// 					quantity: 1000,
	// 					isFilled: true,
	// 				};
	// 				newArray.push(newIngredient);
	// 			} else newArray.push(oldArray[i]);
	// 		}
	// 		return newArray;
	// 	});
	// }

	function fillIngredients(ingredients) {
		setIngredients(ingredients);
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
			{selectedFunction === "Buy" && <Buy />}
			{selectedFunction === "Remaining" && (
				<Remaining
					fillIngredients={fillIngredients}
					ingredients={ingredients}
					// water={ingredients[0]}
					// milk={ingredients[1]}
					// disposableCups={ingredients[2]}
					// beans={ingredients[3]}
				></Remaining>
			)}
			<div className="menu">
				<div
					className="function-button-parent"
					onClick={() => setSelectedFunction("Remaining")}
				>
					<button
						className="function-button"
						style={{
							backgroundColor:
								selectedFunction === "Remaining"
									? "#F0F0F0"
									: "brown",
						}}
					/>
					Remaining
				</div>
				<div
					className="function-button-parent"
					onClick={() => setSelectedFunction("Take")}
				>
					<button
						className="function-button"
						style={{
							backgroundColor:
								selectedFunction === "Take"
									? "#F0F0F0"
									: "brown",
						}}
					/>
					Take
				</div>
			</div>
		</div>
	);
}

export default App;
