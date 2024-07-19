import React, { useState } from "react";
import IconButton, { IconButtonProps } from "../IconButton/IconButton";
import Modal from "../Modal/Modal";

interface IconButtonWithModalProps extends IconButtonProps {
	modalContent: React.ReactNode;
}

const IconButtonWithModal = ({ modalContent, ...buttonProps }: IconButtonWithModalProps) => {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const onClick = () => {
		setModalIsOpen(true);
		buttonProps.onClick();
	};

	return (
		<>
			<IconButton {...buttonProps} onClick={onClick} />
			<Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
				{modalContent}
			</Modal>
		</>
	);
};

export default IconButtonWithModal;
