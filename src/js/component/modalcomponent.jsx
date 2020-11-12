import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export function MyModal() {
	const [show, setShow] = useState(true);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Modal show={show} onHide={handleShow}>
				<div className="text-center">
					<Modal.Title>Choose your weapon</Modal.Title>
				</div>
				<Modal.Body className="d-flex justify-content-between">
					<div className="d-flex flex-column justify-content-center">
						<input type="text" />
						<Button
							className="mt-1"
							variant="dark"
							onClick={handleClose}>
							X
						</Button>
					</div>
					<div className="d-flex flex-column justify-content-center">
						<input type="text" />
						<Button
							className="mt-1"
							variant="dark"
							onClick={handleClose}>
							O
						</Button>
					</div>
				</Modal.Body>
			</Modal>
		</>
	);
}
