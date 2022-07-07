import coffeeCup from "../giphy.gif";

export default function Invoice(props) {
	return (
		<div className="invoice">
			<div className="receipt">
				<img src={coffeeCup} height="20px" />
				<table>
					<tr>
						<th>ITEM</th>
						<th>QTY</th>
						<th>COST</th>
					</tr>
					<tr>
						<td>Cappuccino</td>
						<td>1</td>
						<td>$6</td>
					</tr>
				</table>
				<div>Thank you for your visit.</div>
			</div>
		</div>
	);
}
