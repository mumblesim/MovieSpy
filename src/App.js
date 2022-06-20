import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './StyleComponents/Header';
import { NavBar } from './StyleComponents/NavBar';
import { Trending } from './Pages/Trending';
import { Search } from './Pages/Search';
import { ComingSoon } from './Pages/ComingSoon';
import { TrendingWeek } from './Pages/TrendingWeek';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Trending />} />
				<Route path="/search" element={<Search />} />
				<Route path="/week" element={<TrendingWeek />} />
				<Route path="/soon" element={<ComingSoon />} />
			</Routes>
			<NavBar />
		</BrowserRouter>
	);
}

export default App;
