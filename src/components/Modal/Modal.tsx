import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./Modal.scss";
import IconButton from "../IconButton/IconButton";
import close from "../../assets/close.svg";

export interface ModalContent {
	onClose: () => void;
}

const Modal = ({
	isOpen,
	onClose,
	children,
}: {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
}) => {
	if (!isOpen) return null;

	return createPortal(
		<div className="overlay" onClick={onClose}>
			<div className="modal" onClick={(e) => e.stopPropagation()}>
				<div className="header">
					<div className="container">
						<div className="header_content">
							<div className="fileObserverName"></div>
							<IconButton iconURL={close} onClick={onClose} />
						</div>
					</div>
				</div>
				<div className="modal-main-part">
					<div className="container">
						<div className="modal-content">{children}</div>
					</div>
				</div>
			</div>
		</div>,
		document.getElementById("portal") as HTMLElement
	);
};

export default Modal;
