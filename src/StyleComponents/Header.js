import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

//Header Styling
export const TopBar = styled.div`
	display: flex;
	flex-direction: row;
	background-color: maroon;
	color: gold;
	font-size: 30px;
	font-weight: bold;
	font-family: Fredoka;
	padding: 10px 30px 15px;
	align-items: center;
	position: fixed;
	width: 100%;
	top: 0px;
	z-index: 10;
`;

//App title
const BarName = styled.img`
	height: 45px;
	display: flex;
	flex-direction: row;
	cursor: pointer;
`;

/*
export const BarName = styled.div`
	display: flex;
	flex-direction: row;
	color: gold;
	font-size: 30px;
	font-weight: bold;
	font-family: Fredoka;
	padding-left: 30px;
`;

//App icon

const BarImg = styled.img`
icon for the thingie

`
*/

//Search box thingie
/*
export const SearchTab = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-right: 50px;
	margin-left: auto;
	padding: 5px 5px;
	background-color: gold;
	color: black;
	border-radius: 5px;
	width: 25%;
`;

//Search icon
export const SearchImg = styled.img`
	width: 30px;
	height: 30px;
	margin-left: 5px;
`;

//Search input box
export const SearchKey = styled.input`
	border: none;
	outline: none;
	margin-left: 30px;
	margin-right: 30px;
	height: 20px;
	width: 75%;
	background-color: gold;
`;
*/
/*
export const Trending = styled.button`
	min-width: 100px;
	padding: 16px 32px;
	border-radius: 4px;
	border: 2px double gold;
	background: maroon;
	color: gold;
	font-size: calc(15px + 0.5vw);
	cursor: pointer;
	margin-right: 30px;
	margin-left: 40%;
`;
*/

export const Header = () => {
	const navigate = useNavigate();
	const HomeClick = () => {
		navigate('/');
	};
	return (
		<TopBar>
			<BarName src="../title.png" alt="MOVIESPY" onClick={HomeClick} />
		</TopBar>
	);
};
