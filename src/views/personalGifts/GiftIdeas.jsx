import styled from "styled-components";
import { PageWrapper } from "./PersonalGiftStyle";
import Dropdown from "../../components/Dropdown";
import { useState } from "react";
import GiftCard from "../../components/GiftCard";

const FilterHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 14px;

	.dropdown_row {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.drop-down {
		.inputWrapper {
			width: 63px;
			border: none;
			padding: 0;
		}

		.list {
			width: 190px;
		}
	}

	.more_ideas_btn {
		border-radius: 8px;
		border: 1.5px solid #462c6f;
		background: #fff;
		padding: 8px 16px;
		color: #522864;
	}
`;

const IdeasGridWrapper = styled.div`
  margin-top: 24px;
	display: grid;
	/* grid-template-columns: repeat(auto-fill, minmax(304px, 1fr)); */
	grid-template-columns: repeat(3, 1fr);
	gap: 24px;

  
  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
	}
`;

const amount = ["<$10", "<$50", "<$100", "<$200", "<$500", "<$1000"];

const GiftIdeas = ({giftIdeasList}) => {
	const [selectedAmountFilter, setSelectedAmountFilter] = useState("<$10");
	console.log(giftIdeasList)
	return (
		<PageWrapper>
			<FilterHeader>
				<div className="dropdown_row">
					Budget:{" "}
					<Dropdown
						className={"drop-down"}
						list={amount}
						value={selectedAmountFilter}
						setValue={setSelectedAmountFilter}
					/>
				</div>
				<button type="button" className="more_ideas_btn">
					More ideas
				</button>
			</FilterHeader>

			<IdeasGridWrapper>
        {giftIdeasList?.map((gift, idx)=> (
          <GiftCard key={gift.id} giftItem={gift} />
        ))}
			</IdeasGridWrapper>
		</PageWrapper>
	);
};

export default GiftIdeas;
