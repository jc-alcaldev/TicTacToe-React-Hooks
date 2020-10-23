import React, { useState, useEffect } from "react";
import { TicTacToe } from "./tictactoegrid.jsx";
import { MyModal } from "./modalcomponent.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<div>
				<MyModal />
			</div>
			<div className="text-center mt-5">
				<TicTacToe />
			</div>
		</div>
	);
}
