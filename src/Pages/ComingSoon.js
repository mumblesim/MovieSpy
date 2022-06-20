import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Title } from './Search';
import { MovieBox, MovieOverview } from '../StyleComponents/MovieOverview';
import { API_KEY } from './Trending';

export const ComingSoon = () => {
	const [listSoon, setListSoon] = useState([]);

	const getSoon = async () => {
		const { data } = await axios.get(
			`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1&adult=false`
		);
		setListSoon(data.results);
	};

	useEffect(() => {
		getSoon();
	}, []);

	return (
		<>
			<Title>UPCOMING MOVIES</Title>
			<MovieBox>
				{listSoon &&
					listSoon.map((t) => (
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
