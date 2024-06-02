import { Form, Formik } from "formik";
import * as Yup from "yup";
import { LoaderPage, PageHeader, PageWrapper } from "./PersonalGiftStyle";
import { PiLightning } from "react-icons/pi";
import { useEffect, useState } from "react";
import GiftIdeas from "./GiftIdeas";
import { PropagateLoader } from "react-spinners";
import axios from "axios";

const PersonalGiftIdeas = () => {
	const [giftIdeasList, setGiftIdeasList] = useState([]);
	const [loading, setLoading] = useState(false);

	const schema = Yup.object({
		userInput: Yup.string().required("You must enter characters"),
	});

	const getGifts = async (gender, age_range, tags) => {
		const res = await axios.get(
			`https://staging-vendors.giftly.me/api/custom-search-products?gender=${gender}&age_range=${age_range}&tags[]=${tags}`
		);
		return res.data;
	};

	const handleSubmit = async (values, setSubmitting) => {
		setLoading(true);
		try {
			const aiRes = await axios.post(
				"https://testgift-aitool.postpaddy.com/test_project",
				{ description: values.userInput }
			);
			console.log(aiRes.data);
			const ageRange = aiRes.data?.age_range;
			const gender = aiRes.data?.gender;
			const category =
				aiRes.data?.top_4_gifts.join(",") ||
				aiRes.data?.top_4_gift_categories.join(",");
			const resGiftsData = await getGifts(gender, ageRange, category);
			setGiftIdeasList(resGiftsData.data);

			setSubmitting(false);
			setLoading(false);
		} catch (error) {
			setSubmitting(false);
			setLoading(false);
		}
	};

	if (loading) {
		return (
			<LoaderPage>
				<PropagateLoader
					color={"#462C6F"}
					loading={loading}
					size={10}
					aria-label="Loading Spinner"
					data-testid="loader"
				/>
				Brainstorming ideas
			</LoaderPage>
		);
	}

	if (giftIdeasList.length) {
		return <GiftIdeas giftIdeasList={giftIdeasList} />;
	}

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

			<Formik
				initialValues={{
					userInput: "",
				}}
				validationSchema={schema}
				onSubmit={(values, { setSubmitting }) => {
					handleSubmit(values, setSubmitting);
				}}
			>
				{({ values, isSubmitting, isValid, dirty, handleChange, errors }) => (
					<Form className="idea_input_form">
						<header className="header">
							Who are you gifting to and what’s the occasion?
						</header>

						<div className="form_group">
							<label htmlFor="userInput">
								What are they like? What are their hobbies, interests,
								likes/dislikes?
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

export default PersonalGiftIdeas;
