import React, { useState } from "react";
import Modal from "../Modal/Modal";

const ModalWithButton = ({
	renderButton,
	renderModalContent,
}: {
	renderButton: (onClick: () => void) => React.ReactNode;
	renderModalContent: (onClose: () => void) => React.ReactNode;
}) => {
	const [isOpen, setIsOpen] = useState(false);

	const onClick = () => { 
		setIsOpen(true);
	};

    const onClose = () => {
        setIsOpen(false);
    }

	return (
		<>
			{renderButton(onClick)}
			<Modal
				isOpen={isOpen}
				onClose={onClose}
			>
                { renderModalContent(onClose) }
            </Modal>
		</>
	);
};

export default ModalWithButton;
