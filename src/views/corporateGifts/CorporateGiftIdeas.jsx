import styled from "styled-components";
import { PageHeader, PageWrapper } from "../personalGifts/PersonalGiftStyle";
import { useState } from "react";
import { PiLightning } from "react-icons/pi";
import { Form, Formik } from "formik";
import Dropdown from "../../components/Dropdown";

const TabWrapper = styled.div`
	width: max-content;
	margin: 48px auto;
	display: flex;
	align-items: center;
	gap: 8px;
	border-radius: 4px;
	background-color: #fff;
	padding: 4px;

	button {
		padding: 10px 12px;
		border-radius: 8px;
		min-width: 197px;
		font-size: 16px;
		font-weight: 500;

		&.active {
			background-color: #462c6f;
			color: #fff;
		}
	}
`;

const Divider = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 18px;
	position: relative;

	.text {
		position: relative;
		padding: 6px;
		background-color: #fff;
		z-index: 1;
		font-size: 14px;
	}

	&::after {
		content: "";
		position: absolute;
		left: 0;
		width: 100%;
		height: 1px;
		background-color: #e2e2ea;
	}
`;

const CorporateGiftIdeas = () => {
	const [activeTab, setActiveTab] = useState("bulk");
	return (
		<PageWrapper>
			<PageHeader>
				<header className="header">
					Hi, I&apos;m Gifta the AI 👋. I&apos;m here to help you effortlessly
					find the perfect, thoughtful gift.
				</header>
				<p className="description">
					Just jot down a brief description of your recipient, and get a list of
					gifts our AI believes will delight them!
				</p>
			</PageHeader>

			<TabWrapper>
				<button
					className={activeTab === "bulk" && "active"}
					onClick={() => setActiveTab("bulk")}
				>
					Bulk Gifting
				</button>
				<button
					onClick={() => setActiveTab("individual")}
					className={activeTab === "individual" && "active"}
				>
					Individual Gifting (Coming soon)
				</button>
			</TabWrapper>

			<Formik
				initialValues={{
					website: "",
					userInput: "",
					amount: "1",
				}}
				// validationSchema={schema}
				onSubmit={(values, { setSubmitting }) => {
					// handleSubmit(values, setSubmitting);
				}}
			>
				{({
					values,
					isSubmitting,
					isValid,
					dirty,
					handleChange,
					errors,
					setFieldValue,
				}) => (
					<Form className="idea_input_form">
						<header className="header">
							Who are you gifting to and what’s the occasion?
						</header>

						<div className="form_group">
							<label htmlFor="website">Enter website</label>
							<input
								className={`input_field ${errors.userInput ? "error_field" : ""}`}
								type="text"
								name="website"
								onChange={handleChange}
								value={values.website}
								placeholder="www.postpaddy.com"
							/>
							{errors.userInput && (
								<div className="error">{errors.website}</div>
							)}
						</div>

						<Divider>
							<span className="text">or</span>
						</Divider>

						<div className="form_group">
							<label htmlFor="userInput">
								Tell us about your the people you’re gifting,demographics and
								any other information.
							</label>
							<textarea
								className={errors.userInput ? "error_field" : ""}
								name="userInput"
								onChange={handleChange}
								value={values.userInput}
								placeholder="I'm looking for a gift for my mom, she's in her 50s and likes cooking, pets, and romance novels. The occasion is Christmas and my budget is $50......"
							/>
							{errors.userInput && (
								<div className="error">{errors.userInput}</div>
							)}
						</div>

						<Dropdown
							// className={"drop-down"}
							list={[1, 2, 3, 4]}
							value={values.amount}
							setValue={(val) => setFieldValue("amount", val)}
						/>

						<button
							className="submit_btn"
							type="submit"
							disabled={isSubmitting || !(isValid && dirty)}
						>
							<PiLightning size="20px" />
							Brainstorm their gifts
						</button>
					</Form>
				)}
			</Formik>
		</PageWrapper>
	);
};

export default CorporateGiftIdeas;
