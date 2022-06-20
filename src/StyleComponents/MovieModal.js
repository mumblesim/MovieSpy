import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { MovieBoxContainer } from './MovieOverview';
import { API_KEY } from '../Pages/Trending';
import axios from 'axios';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { posterStart } from './MovieOverview';
import { grid } from '@mui/system';

const MAX_LENGTH = 350;

const PosterImg = styled.img`
	width: 95%;
	height: 95%;
	border-radius: 10px;
	background: #000;
	@media screen and (max-height: 600px), (max-width: 1046px) {
		height: 80%;
		width: 80%;
	}
`;

const MovieInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	line-height: 1.8;
	color: gold;
	margin-bottom: 1vh;
`;

const TitleName = styled.span`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	font-size: 4vh;
	font-weight: bold;
	font-family: Helvetica;
	color: gold;
	padding-bottom: 5px;
	margin-bottom: 1vh;
	margin-top: 1vh;
	@media screen and (max-height: 600px), (max-width: 974px) {
		font-size: 15px;
	}
`;

const MovieInfo = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 2vh;
	font-family: Helvetica;
	color: #ebd7a0;
	margin-right: 1vw;
	margin-left: 1vw;
	margin-bottom: 0.5vh;
	padding-bottom: 5px;
	justify-content: space-between;
	gap: 10px;
	margin-top: 0.5vh;
	text-align: justify;
	@media screen and (max-height: 600px), (max-width: 1046px) {
		font-size: 10px;
	}
`;

const Bolds = styled.span`
	color: gold;
	font-weight: 500;
`;

const TrailerIcon = styled.img`
	height: 5vh;
	width: 5vw;
	min-width: 25px;
	@media screen and (max-height: 600px), (max-width: 974px) {
		width: 15vw;
	}
`;
const TrailerText = styled.span`
	font-size: 1.5vh;
	color: gold;
	@media screen and (max-height: 600px), (max-width: 974px) {
		display: none;
	}
`;
/*
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

*/
const TrailerButton = styled.button`
	display: flex;
	flex-wrap: wrap;
	white-space: normal;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	line-height: 1vh;
	margin-top: 1vh;
	padding: 1vh;
	height: 10vh;
	width: 10vw;
	border-radius: 4px;
	background: black;
	cursor: pointer;
	border: 4px;
	&:hover {
		background-color: maroon;
	}
	@media screen and (max-height: 600px), (max-width: 974px) {
		width: 18vw;
		height: 7vh;
	}
`;

//BOX Style
/* ver 1.0
const style = {
	outline: 0,
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 1000,
	height: 500,
	bgcolor: '#000',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
	display: 'grid',
	gridTemplateColumns: 'repeat(2, 1fr)',
	gap: 1,
}; */

const style = {
	outline: 0,
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '61vw',
	height: '70vh',
	bgcolor: '#000',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
	display: 'grid',
	gridTemplateColumns: 'repeat(2, 1fr)',
	gap: 1,
	'@media screen and (max-height: 600px), (max-width: 974px)': {
		outline: 0,
		position: 'absolute',
		bgcolor: '#000',
		border: '2px solid #000',
		transform: 'translate(-50%, -50%)',
		height: '70%',
		width: '70%',
		boxShadow: 24,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: '10px 10px 10px 10px',
	},
};

export default function MovieModal({ children, id }) {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const [content, setContent] = useState();
	const [vid, setVid] = useState();

	const getVid = async () => {
		const { data } = await axios.get(
			`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`
		);
		setVid(data.results[0]?.key);
	};

	const getData = async () => {
		const { data } = await axios.get(
			`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
		);
		console.log(data);
		setContent(data);
	};

	useEffect(() => {
		getData();
		getVid();
	}, [children, id]);

	/* Added [children,id] cause idk man i think it helps
	useEffect(() => {
		getData();
		getVid();
	});
	*/
	const onTrailer = () => {
		var source = 'https://www.youtube.com/watch?v=' + vid;
		window.open(source, '_blank');
	};

	return (
		<div>
			<MovieBoxContainer onClick={handleOpen}>{children}</MovieBoxContainer>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					{content && (
						<Box sx={style}>
							<PosterImg
								src={
									content.poster_path ? posterStart + content.poster_path : ''
								}
							/>
							<MovieInfoContainer>
								<TitleName>{content?.original_title}</TitleName>
								<MovieInfo>
									<span>
										<Bolds>Plot: </Bolds>
										{content?.overview.substring(0, MAX_LENGTH)}
									</span>
									<span>
										<Bolds>imdB:</Bolds> {content?.vote_average}
									</span>
									<span>
										<Bolds>Release Date:</Bolds> {content?.release_date}
									</span>
									<span>
										<Bolds>Runtime</Bolds> {content?.runtime} minutes
									</span>
								</MovieInfo>
								<TrailerButton onClick={onTrailer}>
									<TrailerIcon src="../trailer.png" alt="oops" />
									<TrailerText>Watch Trailer</TrailerText>
								</TrailerButton>
							</MovieInfoContainer>
						</Box>
					)}
				</Fade>
			</Modal>
		</div>
	);
}
