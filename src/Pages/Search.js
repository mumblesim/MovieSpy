import styled from 'styled-components';
import { API_KEY } from './Trending';
import axios from 'axios';
import { useState } from 'react';
import { MovieBox, MovieOverview } from '../StyleComponents/MovieOverview';

export const Title = styled.div`
	display: flex;
	margin-top: 100px;
	color: gold;
	justify-content: center;
	font-size: 20px;
`;
//Overall box thing
const SearchTab = styled.div`
	display: flex;
	flex-direction: row;
	flex: 1;
	justify-content: center;
	margin: 30px auto 20px auto;
	padding: 5px 5px;
	background-color: gold;
	color: black;
	border-radius: 5px;
	width: 25%;
	@media screen and (max-height: 600px), (max-width: 974px) {
		font-size: 15px;
		padding-left: 10px;
	}
`;

//Search icon
const SearchImg = styled.img`
	width: 30px;
	height: 30px;
	margin-left: 5px;
	@media screen and (max-height: 600px), (max-width: 974px) {
		margin-left: 0px;
		padding-left: 20px;
	}
`;

//Search input box
const SearchKey = styled.input`
	border: none;
	outline: none;
	margin-left: 30px;
	margin-right: 30px;
	min-height: 20px;
	min-width: 75%;
	background-color: gold;
	padding-top: 5px;
	@media screen and (max-height: 600px), (max-width: 974px) {
		margin-left: 0px;
	}
`;

export const Search = () => {
	const [searchInput, updateSearchInput] = useState();
	const [timeInput, updateTimeInput] = useState();
	const [resultList, updateResultList] = useState([]);

	const queryInfo = async (movieQuery) => {
		const result = await axios.get(
			/*	`https://www.omdbapi.com/?s=${movieQuery}&apikey=${apikey}` */
			`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movieQuery}`
		);
		/* 	updateResultList(result.data.Search); */
		updateResultList(result.data.results);
	};

	const onQuery = (event) => {
		clearTimeout(timeInput);
		updateSearchInput(event.target.value);
		const timer = setTimeout(() => queryInfo(event.target.value), 500);
		updateTimeInput(timer);
	};

	return (
		<>
			<Title>MOVIE SEARCH</Title>
			<SearchTab>
				<SearchImg src="../searchicon.png" alt="oops" />
				<SearchKey
					placeholder="Search"
					value={searchInput}
					onChange={onQuery}
				/>
			</SearchTab>
			<MovieBox>
				{resultList &&
					resultList.map((t) => (
						<MovieOverview
							key={t.id}
							id={t.id}
							poster={t.poster_path}
							release={t.release_date}
							title={t.title}
							rating={t.vote_average}
						/>
					))}
			</MovieBox>
		</>
	);
};
