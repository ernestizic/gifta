import styled from "styled-components";

export const DropdownWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 6px;
	position: relative;
	justify-content: flex-end;
  
	label {
    font-size: 14px;
		font-weight: 500;
		color: #101928;
	}
  
	.inputWrapper {
		border: 1px solid #D0D5DD;
		height: 40px;
		border-radius: 6px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10px 12px;
		cursor: pointer;

		.placeholder {
			color: #667085;
			font-size: 16px;
		}

		input {
			border: none;
      width: 100%;
      background-color: inherit;
			cursor: pointer;

			&::placeholder {
				color: #667085;
				font-size: 16px;
			}
		}

		svg {
			transition: all 0.2s ease-out;
		}
	}

	.rotate-icon {
		svg {
			transform: rotateZ(180deg);
		}
	}

	.list {
		border-radius: 8px;
		padding: 4px 0;
		border: 1px solid #f7f9fc;
		box-shadow: 0px 25px 35px 0px #00000008;
		position: absolute;
		width: 100%;
		background-color: #fff;
		z-index: 5;
		top: calc(100% + 10px);
		max-height: 300px;
		overflow: auto;
	}

	.listItem {
		margin: 0;
		text-align: left;
		padding: 10px 14px;
		font-size: 16px;
		font-weight: 500;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;

		&:hover {
			background: #f9fafb;
		}
	}
`;
