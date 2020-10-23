import React, { useState } from "react";

import Button from "react-bootstrap/Button";

import Table from "react-bootstrap/Table";

export const TicTacToe = () => {
	// const tabelPositions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

	const winningPositions = [
		[0, 1, 2],
		[0, 3, 6],
		[0, 4, 8],
		[1, 4, 7],
		[2, 4, 6],
		[2, 5, 8],
		[3, 4, 5],
		[6, 7, 8]
	];

	const [player, setPlayers] = useState(0);

	const [player1] = useState([]);

	const [player2] = useState([]);

	const MyPlayerAsign = e => {
		if (player == 0) {
			setPlayers(1);
			player1.push(e.target.id);
			console.log(player1);
		} else {
			setPlayers(0);
			player2.push(e.target.id);
			console.log(player2);
		}
		Winner();
	};
	const Winner = () => {
		for (let index = 0; index < winningPositions.length; index++) {
			for (
				let index2 = 0;
				index2 < winningPositions[index2].length;
				index2++
			) {
				if (
					(player1.includes("0") &&
						player1.includes("1") &&
						player1.includes("2")) ||
					(player2.includes("0") &&
						player2.includes("1") &&
						player2.includes("2"))
				) {
					console.log("win");
				} else if (
					player1.includes("0") &&
					player1.includes("3") &&
					player1.includes("6")
				) {
					console.log("win");
				} else if (
					player1.includes("0") &&
					player1.includes("4") &&
					player1.includes("8")
				) {
					console.log("win");
				} else if (
					player1.includes("1") &&
					player1.includes("4") &&
					player1.includes("7")
				) {
					console.log("win");
				} else if (
					player1.includes("2") &&
					player1.includes("4") &&
					player1.includes("6")
				) {
					console.log("win");
				} else if (
					player1.includes("2") &&
					player1.includes("5") &&
					player1.includes("8")
				) {
					console.log("win");
				} else if (
					player1.includes("3") &&
					player1.includes("4") &&
					player1.includes("5")
				) {
					console.log("win");
				} else if (
					player1.includes("6") &&
					player1.includes("7") &&
					player1.includes("8")
				) {
					console.log("win");
				} else {
					console.log("notWin");
				}
			}
		}
	};
	return (
		<div classNAme="d-flex justify-content-center">
			<h1>Tic Tac Toe in React.jsx</h1>
			<Button variant="outline-dark">Start Over</Button>
			<div className="container">
				<Table striped bordered hover variant="dark">
					<tbody>
						<tr>
							<td id="0" onClick={e => MyPlayerAsign(e)}>
								0
							</td>
							<td id="1" onClick={e => MyPlayerAsign(e)}>
								1
							</td>
							<td id="2" onClick={e => MyPlayerAsign(e)}>
								2
							</td>
						</tr>
						<tr>
							<td id="3" onClick={e => MyPlayerAsign(e)}>
								3
							</td>
							<td id="4" onClick={e => MyPlayerAsign(e)}>
								4
							</td>
							<td id="5" onClick={e => MyPlayerAsign(e)}>
								5
							</td>
						</tr>
						<tr>
							<td id="6" onClick={e => MyPlayerAsign(e)}>
								6
							</td>
							<td id="7" onClick={e => MyPlayerAsign(e)}>
								7
							</td>
							<td id="8" onClick={e => MyPlayerAsign(e)}>
								8
							</td>
						</tr>
					</tbody>
				</Table>
			</div>
		</div>
	);
};
