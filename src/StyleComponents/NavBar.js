import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const NavContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	background-color: maroon;
	padding-top: 1vh;
	padding-bottom: 1vh;
	justify-content: space-evenly;
	position: fixed;
	width: 100%;
	bottom: 0px;
	max-height: 10vh;
	min-height: 30px;
`;

const Option = styled.button`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 10vh;
	width: 10vh;
	background-color: black;
	color: gold;
	cursor: pointer;
	border: 2px;
	border-radius: 5px;
	min-height: 30px;
	min-width: 30px;

	&:hover {
		background-color: #2b0700;
	}
`;

const OptionName = styled.div`
	font-size: 10px;
	@media screen and (max-height: 600px), (max-width: 974px) {
		display: none;
	}
`;

const OptionImg = styled.img`
	height: 5vh;
	width: 2vw;
	min-width: 25px;
`;
/*
const OptionSearch = styled.button`
	font-color: white;
	padding: 10px 30px;
	margin: 10px 40px 10px 40px;
	cursor: pointer;
	border: 2px solid gold;
`;
*/

export const NavBar = () => {
	const navigate = useNavigate();
	const TrendClick = () => {
		navigate('/');
	};

	const SearchClicked = () => {
		navigate('/search');
	};

	const WeekClick = () => {
		navigate('/week');
	};

	const SoonClicked = () => {
		navigate('/soon');
	};

	return (
		<NavContainer>
			<Option onClick={TrendClick}>
				<OptionImg src="../trendingday.png" alt="oops" />
				<OptionName>Trending Today</OptionName>
			</Option>
			<Option onClick={SearchClicked}>
				<OptionImg src="../search.png" alt="oops" />
				<OptionName>Search</OptionName>
			</Option>
			<Option onClick={WeekClick}>
				<OptionImg src="../trendingweek.png" alt="oops" />
				<OptionName>Trending Weekly</OptionName>
			</Option>
			<Option onClick={SoonClicked}>
				<OptionImg src="../upcoming.png" alt="oops" />
				<OptionName>Coming Soon</OptionName>
			</Option>
		</NavContainer>
	);
};
