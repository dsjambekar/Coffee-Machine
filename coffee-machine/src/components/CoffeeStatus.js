import logo from "../giphy.gif";

export default function CoffeeStatus(props) {
	return (
		<div>
			<ul>
				{props.messages.map((element) => {
					return <li className="animate list-usp">{element}</li>;
				})}
			</ul>
			<img src={logo} alt="Coffee is ready" height={100} />
		</div>
	);
}
