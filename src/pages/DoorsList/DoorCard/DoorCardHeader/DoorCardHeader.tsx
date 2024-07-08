import React, { useEffect, useRef, useState } from "react";
import edit from "../../../../assets/edit.svg";
import IconButton from "../../../../components/IconButton/IconButton";
import "./DoorCardHeader.scss";
import done from "../../../../assets/done.svg";
import close from "../../../../assets/close.svg";
import TextInput from "../../../../components/Input/TextInput";

const DoorCardHeader = ({
	onSubmit,
	title,
}: {
	onSubmit: (value: string) => void;
	title: string;
}) => {
	const [isEditing, setIsEditing] = useState(false);
	const [currentTitle, setCurrentTitle] = useState(title);

	const inputRef = useRef<HTMLInputElement>(null);
	const oldTitle = useRef(title);

	useEffect(() => {
		if (isEditing) {
			inputRef.current.focus();
		}
	}, [isEditing]);

	const onTitleComfirmed = () => {
		oldTitle.current = currentTitle;
		setIsEditing(false);
		onSubmit(currentTitle);
	};

	const onCanceled = () => {
		setCurrentTitle(oldTitle.current);
		setIsEditing(false);
	};

	return (
		<div className="DoorCardHeader">
			<div className={`editHeader ${!isEditing ? "hidden" : ""}`}>
				<TextInput
                    className="changeableInput"
                    inputRef={inputRef}
					value={currentTitle}
					onChange={(e) => setCurrentTitle(e.target.value)}
				/>
				<IconButton iconURL={done} onClick={onTitleComfirmed} />
				<IconButton iconURL={close} onClick={onCanceled} />
			</div>

			<div className={`previewHeader ${isEditing ? "hidden" : ""}`}>
				<div className="title">{title}</div>
				<div className="editSign">
					<IconButton
						onClick={() => setIsEditing(true)}
						iconURL={edit}
					/>
				</div>
			</div>
		</div>
	);
};

export default DoorCardHeader;
