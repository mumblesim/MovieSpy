import styled from 'styled-components';
import MovieModal from './MovieModal';

export const posterStart = 'https://image.tmdb.org/t/p/original/';

//Main page box
export const MovieBox = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-evenly;
	padding-top: 50px;
	width: 100%;
	color: white;
	padding-bottom: 100px;
`;

export const MovieBoxContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 200px;
	height: 320px;
	padding: 10px 10px 10px 10px;
	margin: 10px 10px 20px 10px;
	background-color: black;
	border-radius: 2px;
	position: relative;
	gap: 24px;
	outline: 4px double gold;
	cursor: pointer;
	&:hover {
		background-color: #2b0700;
		color: gold;
	}
`;

const MoviePoster = styled.img`
	object-fit: fill;
	height: 100%;
	width: 100%;
`;

const TitleName = styled.div`
	font-size: 15px;
	font-weight: bold;
	font-family: Helvetica;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	margin-top: 5px;
	padding-bottom: 5px;
	@media screen and (max-height: 600px), (max-width: 974px) {
		display: none;
	}
`;

const TitleInfo = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 15px;
	font-family: Helvetica;
	color: gray;
	margin-right: 5px;
	text-transform: capitalize;
	@media screen and (max-height: 600px), (max-width: 974px) {
		display: none;
	}
`;
/*
const NoMovie = styled.span`
	color: white;
	padding-top: 50px;
`;
*/
export const MovieOverview = ({ id, poster, release, title, rating }) => {
	return (
		<MovieModal id={id}>
			<MoviePoster src={poster ? posterStart + poster : 'not found'} />
			<TitleName>{title ? title : ''}</TitleName>
			<TitleInfo>
				<span>{release ? release.substring(0, 4) : ''}</span>
				<span>{rating ? rating : ''}</span>
			</TitleInfo>
		</MovieModal>
	);
};
