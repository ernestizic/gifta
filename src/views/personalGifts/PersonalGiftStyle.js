import styled from "styled-components";

export const PageWrapper = styled.div`
	margin: 72px auto;
	max-width: 960px;

	.idea_input_form {
		margin: 72px 0;
		padding: 48px;
		border-radius: 8px;
		background-color: #fff;
		box-shadow: 0px 1.5px 4px -1px rgba(16, 25, 40, 0.07);
		display: flex;
		flex-direction: column;
		gap: 24px;

		.header {
			color: #1d2739;
			font-size: 18px;
			font-weight: 600;
		}

		label {
			font-size: 14px;
			font-weight: 500;
			line-height: 20px;
			color: #344054;
		}

		.form_group {
			display: flex;
			flex-direction: column;
			gap: 6px;
		}

		.error {
			color: #f04438;
			font-size: 14px;
			font-weight: 400;
			line-height: 20px;
		}

		.input_field {
			padding: 10px 14px;
			border: 1px solid #d0d5dd;
			border-radius: 8px;
		}

		textarea {
			border-radius: 8px;
			border: 1px solid #d0d5dd;
			background: #fff;
			box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
			width: 100%;
			height: 174px;
			padding: 10px 14px;
			font-size: 14px;
			color: #101928;
			&::placeholder {
				color: #98a2b3;
			}
		}

		.error_field {
			border: 1px solid #f04438;
		}

		.submit_btn {
			display: flex;
			padding: 8px 12px;
			justify-content: center;
			align-items: center;
			gap: 8px;
			border-radius: 8px;
			background: #5b2c6f;
			width: max-content;
			height: 36px;
			color: #fff;
			font-size: 14px;
			font-weight: 600;
			margin: auto;

			&:disabled {
				opacity: 0.5;
			}
		}
	}

	@media (max-width: 700px) {
		max-width: 100%;
		margin: 48px 0;
		padding: 0 16px;

		.idea_input_form {
			margin: 48px 0;
			padding: 24px;
		}
	}
`;

export const PageHeader = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 16px;

	.header {
		color: #462c6f;
		font-size: 48px;
		font-weight: 700;
		line-height: 48px;
	}

	.description {
		color: #1d2739;
		font-size: 20px;
		font-weight: 400;
		line-height: 24px;
		max-width: 504px;
	}

	@media (max-width: 700px) {
		.header {
			font-size: 24px;
			line-height: 24px;
		}

		.description {
			font-size: 16px;
			line-height: 19px;
			max-width: 100%;
		}
	}
`;

export const LoaderPage = styled.div`
	height: calc(100vh - 80px);
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 16px;
	justify-content: center;
	font-size: 24px;
	font-weight: 700;
	color: #462C6F;
`
