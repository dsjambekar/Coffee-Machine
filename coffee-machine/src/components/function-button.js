export default function FunctionButton(props) {
	return (
		<div className="function-button-parent" onClick={props.onClick}>
			<button
				className="function-button"
				style={{
					backgroundColor: props.function.isSelected
						? "#F0F0F0"
						: "brown",
				}}
			></button>
			{props.function.name}
		</div>
	);
}
