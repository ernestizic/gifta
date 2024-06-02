import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/Gifta_logo.png";
import UsersIcon from "../assets/people.svg";
import HeartIcon from "../assets/heart-circle.svg";
import GiftIcon from "../assets/giftIcon.svg";

const NavbarWrapper = styled.div`
	height: 70px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: fixed;
	top: 0;
	width: 100%;
	background-color: #fff;
	padding: 16px 72px;

	.logo {
		width: 36px;
	}

	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		display: flex;
		gap: 16px;
	}

	li {
		a {
			padding: 9px 12px;
			border-radius: 4px;
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 4px;
      color: #344054;
      font-size: 14px;
		}

    .active {
      background-color: #EFEAF1;
      font-weight: 600;
      color: #522864;
    }
	}

	@media (max-width: 700px) {
		padding: 16px;

		ul {
			display: none;
		}
	}
`;

const Navbar = () => {
	return (
		<NavbarWrapper>
			<Link to="/">
				<img src={logo} alt="logo" className="logo" />
			</Link>

			<ul>
				<li>
					<NavLink to="/personal-gift-ideas">
						<img src={GiftIcon} alt="GiftIcon" />
						Personal gift ideas
					</NavLink>
				</li>
				<li>
					<NavLink to="/corporate-gift-ideas">
						<img src={UsersIcon} alt="UsersIcon" />
						Corporate gift ideas
					</NavLink>
				</li>
				<li>
					<NavLink to="wishlists">
						<img src={HeartIcon} alt="HeartIcon" />
						Wishlists
					</NavLink>
				</li>
			</ul>
		</NavbarWrapper>
	);
};

export default Navbar;
