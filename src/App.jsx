import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DashboardLayout from "./views/DashboardLayout";
import PersonalGiftIdeas from "./views/personalGifts/PresonalGiftIdeas"
import CorporateGiftIdeas from "./views/corporateGifts/CorporateGiftIdeas";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<DashboardLayout />}>
					<Route index element={<Navigate to="/personal-gift-ideas" />} />
          <Route path="/personal-gift-ideas" element={<PersonalGiftIdeas />} />
          <Route path="/corporate-gift-ideas" element={<CorporateGiftIdeas />} />
				</Route>
        {/* No match */}
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
