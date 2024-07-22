import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal";

const ModalWithButton = ({
	renderButton,
	renderModalContent,
}: {
	renderButton: (onClick: () => void) => React.ReactNode;
	renderModalContent: (onClose: () => void) => React.ReactNode;
}) => {
	const [isOpen, setIsOpen] = useState(false);

    // useEffect(() => {
    //     console.log("mount modal")
    //     return () => {
    //         console.log("unmount")
    //     }
    // }, [])

    // useEffect(() => console.log("rerender"))

	const onClick = () => { 
		setIsOpen(true);
	};

    const onClose = () => {
        console.log("onclose")
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
