import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Detail = styled.div`
	font-size: 16px;
	font-family: 'Bebas Neue', cursive;
	color: white;
`;

export const Movies = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		fetchMovies();
	}, []);

	const fetchMovies = () => {
		//setLoading(true);
		fetch('https://mtdose-netflix-shows.herokuapp.com/shows?type=movie')
			.then((res) => res.json())
			.then((data) => setMovies(data.response));
		//.finally (() => setLoading((false));
	};

	return (
		<>
			<section className="main-container">
				<section className="movie-grid-wrapper">
					{movies.map((movie) => {
						return (
							<div className="movie-card-container">
								<div className="movie-card" key={movie.show_id}>
									<h1 className="movie-title">{movie.title} </h1>
									<Detail>{movie.director}</Detail>
									<Detail> {movie.release_year} </Detail>
									<Detail> {movie.country} </Detail>
									{/* <Detail> {movie.rating} </Detail> */}
									<Detail> {movie.duration} </Detail>
									<p className="description"> {movie.description} </p>
								</div>
							</div>
						);
					})}
				</section>
			</section>
		</>
	);
};
