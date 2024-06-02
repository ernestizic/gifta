import styled from "styled-components";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const DashboardLayoutWrapper = styled.div`
	
	.main-content_wrapper {
		padding-top: 70px;
		min-height: 100vh;
		background: #f7f4f9;
		border: 1px solid #f7f4f9;
	}
`;

const DashboardLayout = () => {
	return (
		<DashboardLayoutWrapper>
			<Navbar />
			<div className="main-content_wrapper">
				<Outlet />
			</div>
		</DashboardLayoutWrapper>
	);
};

export default DashboardLayout;
