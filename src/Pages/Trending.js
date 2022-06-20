import axios from 'axios';
import { useEffect, useState } from 'react';
import { Title } from './Search';
import { MovieBox, MovieOverview } from '../StyleComponents/MovieOverview';
export const API_KEY = '6f4483022c77977c4b65aaa43a23e9b4';

export const Trending = () => {
	const [listTrends, setListTrends] = useState([]);

	const getTrends = async () => {
		const { data } = await axios.get(
			`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&adult=false`
		);
		setListTrends(data.results);
	};

	useEffect(() => {
		getTrends();
	}, []);

	return (
		<>
			<Title>TRENDING TODAY</Title>
			<MovieBox>
				{listTrends &&
					listTrends.map((t) => (
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

/*
import axios from 'axios';
import { React, useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { posterStart } from './moviestyles';

//const apikey = '579cf605';
const apikey = '6f4483022c77977c4b65aaa43a23e9b4';

/*
const ModalBox = styled.div`
	display: flex;
	justify-contents: center;
	align-items: center;
	height: 100vh;
`;



const TrailerButton = styled.button`
	min-width: 100px;
	padding: 16px 32px;
	border-radius: 4px;
	background: #141414;
	color: #fff;
	font-size: 24px;
	cursor: pointer;
`;

const Background = styled.div`
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.8);
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 60px;
`;

//aka Modal Wrapper
const ModalBox = styled.div`
	width: 900px;
	height: 500px;
	box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
	background: #000;
	color: gold;
	display: grid;
	grid-template-columns: 0.8fr 1fr;
	position: relative;
	z-index: 10;
	border-radius: 10px;
`;
//modalimg
const PosterImg = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 10px 0 0 10px;
	background: #000;
`;
//modal content
const MovieInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	line-height: 1.8;
	color: gold;
`;

const TitleName = styled.span`
	display: flex;
	flex-direction: row;
	font-size: 25px;
	font-weight: bold;
	font-family: Helvetica;
	color: gold;
	padding-bottom: 5px;
	margin-bottom: 10px;
`;

const MovieInfo = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 15px;
	font-family: Helvetica;
	color: #ebd7a0;
	margin-right: 50px;
	margin-left: 50px;
	margin-bottom: 10px;
	padding-bottom: 5px;
	justify-content: space-between;
	gap: 10px;
	margin-top: 30px;
`;

const Bolds = styled.span`
	color: gold;
	font-weight: 500;
`;

/*
const Close = styled.span`
	font-size: 16px;
	font-weight: 600;
	color: black;
	background: lightgray;
	height: fit-content;
	padding: 8px;
	border-radius: 50%;
	cursor: pointer;
	width: fit-content;
	margin-left: auto;
	margin-right: 50px;
`; 

const CloseModal = styled(MdClose)`
	cursor: pointer;
	position: absolute;
	top: 20px;
	right: 20px;
	width: 32px;
	height: 32px;
	padding: 0;
	z-index: 10;
	color: #ebd7a0;
`;

export const MovieModal = (props) => {
	const [movieInfo, setMovieInfo] = useState();
	const [vidInfo, setVidInfo] = useState();
	const { moviePicked } = props;

	useEffect(() => {
		axios
			 .get(`https://www.omdbapi.com/?i=${moviePicked}&apikey=${apikey}`)
			.then((result) => setMovieInfo(result.data)); 
			.get(
				`https://api.themoviedb.org/3/movie/${moviePicked}?api_key=${apikey}`
			)
			.then((result) => setMovieInfo(result.data));
	}, [moviePicked]);

	useEffect(() => {
		axios
			.get(
				`http://api.themoviedb.org/3/movie/${moviePicked}/videos?api_key=${apikey}`
			)
			.then((response) => setVidInfo(response.data.results[0]));
	}, [moviePicked]);

	const onTrailer = () => {
		var source = 'https://www.youtube.com/watch?v=' + vidInfo?.key;
		window.open(source, '_blank');
	};

	return (
		<Background>
			<ModalBox>
				<PosterImg src={posterStart + movieInfo?.poster_path} />
				<MovieInfoContainer>
					<CloseModal onClick={() => props.onMoviePicked()}>X</CloseModal>
					<TitleName>{movieInfo?.original_title}</TitleName>
					<MovieInfo>
						<span>
							<Bolds>Plot:</Bolds> {movieInfo?.overview}
						</span>
						<span>
							<Bolds>imdB:</Bolds> {movieInfo?.vote_average}
						</span>
						<span>
							<Bolds>Release Date:</Bolds> {movieInfo?.release_date}
						</span>
						<span>
							<Bolds>Runtime</Bolds> {movieInfo?.runtime}
						</span>
						<TrailerButton onClick={onTrailer}>Trailer</TrailerButton>
					</MovieInfo>
				</MovieInfoContainer>
			</ModalBox>
		</Background>
	);
};

/*
	<span>
							<Bolds>Director:</Bolds> {movieInfo?.Director}
						</span>
						<span>
							<Bolds>Actors:</Bolds> {movieInfo?.Actors}
						</span>
			*/
