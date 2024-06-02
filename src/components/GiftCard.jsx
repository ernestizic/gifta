import styled from "styled-components";
import TestImg from "../assets/Frame 1000007293.png";

const Card = styled.div`
	border-radius: 8px;
	border: 2px solid #462c6f;
	background-color: #fff;
	overflow: hidden;

	.imageWrapper {
		height: 260px;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	.gift_info {
		padding: 16px;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 18px;
		font-weight: 700;
		color: #101928;

		.currency {
			font-size: 11px;
			font-weight: 700;
			padding-right: 4px;
		}
		.kobo {
			font-size: 12px;
			font-weight: 600;
		}
		.amount {
			display: flex;
			align-items: center;
		}
	}

	.description {
		color: #475367;
		font-size: 16px;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`;
const base_url_vendors = "https://staging-vendors.giftly.me/api"
const GiftCard = ({ giftItem }) => {
	return (
		<Card>
			<div className="imageWrapper">
				<img src={`${giftItem.avatar?.startsWith("uploads") ? base_url_vendors+'/../'+giftItem.avatar : giftItem.avatar}`} alt="gift" />
			</div>
			<div className="gift_info">
				<div className="header">
					<header className="title">{giftItem?.name}</header>
					<div className="amount">
						<span className="currency">
							{giftItem.currency === "NGN" ? "N" : "$"}
						</span>{" "}
						{giftItem.amount}
						{/* <span className="kobo">.00</span> */}
					</div>
				</div>
				<p className="description">{giftItem?.description}</p>
			</div>
		</Card>
	);
};

export default GiftCard;
