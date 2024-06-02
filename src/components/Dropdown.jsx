import { PiCaretDown } from "react-icons/pi";
import { useState } from "react";
import { useClickOutside } from "webrix/hooks";
import { DropdownWrapper } from "./DropdownStyle";

const Dropdown = ({
	label,
	className,
	name,
	value,
	setValue,
	required,
	placeholder,
	list,
}) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleSelect = (e, selectedItem) => {
		e.preventDefault();
		e.stopPropagation();
		setValue(selectedItem);
		setIsOpen(false);
	};

	const handleMouseDownCapture = useClickOutside(() => setIsOpen(false));

	return (
		<DropdownWrapper
			className={`${className ?? ""}`}
			onMouseDownCapture={handleMouseDownCapture}
		>
			{label && (
				<label htmlFor={name}>
					{label}
					{required && <span className="required">*</span>}
				</label>
			)}
			<div
				className={`inputWrapper ${isOpen ? "rotate-icon" : ""}`}
				onClick={() => setIsOpen((prev) => !prev)}
			>
				<input
					type="text"
					name={name}
					value={value}
					onChange={(e) => {
						setValue(e.target.value);
					}}
					placeholder={placeholder}
					readOnly
				/>
				<PiCaretDown size="20px" />
			</div>

			{isOpen && (
				<div className="list">
					{!!list?.length &&
						list?.map((item) => (
							<button
								key={item}
								type="button"
								className={`listItem`}
								onClick={(e) => handleSelect(e, item?.toString())}
							>
								{item}
							</button>
						))}
				</div>
			)}
		</DropdownWrapper>
	);
};

export default Dropdown;
