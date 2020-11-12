import React from "react";

import { TicTacToe } from "./tictactoegrid.jsx";
import { MyModal } from "./modalcomponent.jsx";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<MyModal />
			<TicTacToe />
		</div>
	);
}
