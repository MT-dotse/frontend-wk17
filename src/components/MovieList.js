import React, { useState, useEffect } from 'react';
import styled from 'styled-components'; //import Styled component
//import { MOVIES } from './utils/Url.js';

//styled components
// const MainContainer = styled.div`
// 	@media (max-width: 992px) {
// 		display: grid;
// 		grid-template-columns: repeat(4, 1fr);
// 	}
// `;

const MovieContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: auto;
	flex-direction: column;
	flex-wrap: wrap;
	line-height: 2;
	border: black;
`;

const Detail = styled.div`
	font-size: 16px;
	font-family: 'Bebas Neue', cursive;
`;

export const MovieList = () => {
	const [movies, setMovies] = useState([]);
	//const [loading, setLoading] = useState (false);

	useEffect(() => {
		fetchMovies();
	}, []);

	const fetchMovies = () => {
		//setLoading(true);
		fetch('https://mtdose-netflix-shows.herokuapp.com/shows')
			.then((res) => res.json())
			.then((data) => setMovies(data.response));
		//.finally (() => setLoading((false));
	};

	return (
		<>
			<section className="movie-grid-wrapper">
				{movies.map((movie) => {
					return (
						<div key={movie.show_id}>
							<div className="movie-card">
								<h1 className="movie-title">{movie.title} </h1>
								<Detail>{movie.director}</Detail>
								<Detail> {movie.release_year} </Detail>
								<Detail> {movie.country} </Detail>
								<Detail> {movie.rating} </Detail>
								<Detail> {movie.duration} </Detail>
								<Detail> {movie.description} </Detail>
							</div>
						</div>
					);
				})}
			</section>
		</>
	);
};
