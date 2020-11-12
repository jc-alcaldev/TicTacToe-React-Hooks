import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

export const TicTacToe = () => {
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

	const [player1, setPlayer1] = useState([]);
	const [player2, setPlayer2] = useState([]);
	const [print, setPrint] = useState([]);
	const [turn, setTurn] = useState("The game starts");

	const MyPlayerAsign = e => {
		if (player == 0) {
			setTurn("It's O turn");
			setPlayers(1);
			player1.push(e.target.id);
			print[e.target.id] = "X";
		} else {
			setTurn("It's X turn");
			setPlayers(0);
			player2.push(e.target.id);
			print[e.target.id] = "0";
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
					(player1.includes("0") &&
						player1.includes("3") &&
						player1.includes("6")) ||
					(player1.includes("0") &&
						player1.includes("4") &&
						player1.includes("8")) ||
					(player1.includes("1") &&
						player1.includes("4") &&
						player1.includes("7")) ||
					(player1.includes("2") &&
						player1.includes("4") &&
						player1.includes("6")) ||
					(player1.includes("2") &&
						player1.includes("5") &&
						player1.includes("8")) ||
					(player1.includes("3") &&
						player1.includes("4") &&
						player1.includes("5")) ||
					(player1.includes("6") &&
						player1.includes("7") &&
						player1.includes("8"))
				) {
					setTurn("X Win!");
					setPlayer1([]);
					setPlayer2([]);
					setPrint([]);
				} else if (
					(player2.includes("0") &&
						player2.includes("1") &&
						player2.includes("2")) ||
					(player2.includes("0") &&
						player2.includes("3") &&
						player2.includes("6")) ||
					(player2.includes("0") &&
						player2.includes("4") &&
						player2.includes("8")) ||
					(player2.includes("1") &&
						player2.includes("4") &&
						player2.includes("7")) ||
					(player2.includes("2") &&
						player2.includes("4") &&
						player2.includes("6")) ||
					(player2.includes("2") &&
						player2.includes("5") &&
						player2.includes("8")) ||
					(player2.includes("3") &&
						player2.includes("4") &&
						player2.includes("5")) ||
					(player2.includes("6") &&
						player2.includes("7") &&
						player2.includes("8"))
				) {
					setTurn("O Win!");
					setPlayer1([]);
					setPlayer2([]);
					setPrint([]);
				} else if ((player1.length == 5) | (player2.length == 5)) {
					setTurn("Not Win!");
					setPlayer1([]);
					setPlayer2([]);
					setPrint([]);
				}
			}
		}
	};
	return (
		<div classNAme="d-flex justify-content-center">
			<h1>Tic Tac Toe in React.jsx</h1>
			<h2>{turn}</h2>
			<Button variant="outline-dark">Start Over</Button>
			<div className="container">
				<Table striped bordered hover variant="dark">
					<tbody>
						<tr>
							<td id="0" onClick={e => MyPlayerAsign(e)}>
								{print[0]}
							</td>
							<td id="1" onClick={e => MyPlayerAsign(e)}>
								{print[1]}
							</td>
							<td id="2" onClick={e => MyPlayerAsign(e)}>
								{print[2]}
							</td>
						</tr>
						<tr>
							<td id="3" onClick={e => MyPlayerAsign(e)}>
								{print[3]}
							</td>
							<td id="4" onClick={e => MyPlayerAsign(e)}>
								{print[4]}
							</td>
							<td id="5" onClick={e => MyPlayerAsign(e)}>
								{print[5]}
							</td>
						</tr>
						<tr>
							<td id="6" onClick={e => MyPlayerAsign(e)}>
								{print[6]}
							</td>
							<td id="7" onClick={e => MyPlayerAsign(e)}>
								{print[7]}
							</td>
							<td id="8" onClick={e => MyPlayerAsign(e)}>
								{print[8]}
							</td>
						</tr>
					</tbody>
				</Table>
			</div>
		</div>
	);
};
