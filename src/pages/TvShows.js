import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Detail = styled.div`
	font-size: 16px;
	font-family: 'Bebas Neue', cursive;
	color: white;
`;

export const TvShows = () => {
	const [tvshows, setTvshows] = useState([]);

	useEffect(() => {
		fetchTvShows();
	}, []);

	const fetchTvShows = () => {
		//setLoading(true);
		fetch('https://mtdose-netflix-shows.herokuapp.com/shows?type=tv')
			.then((res) => res.json())
			.then((data) => setTvshows(data.response));
		//.finally (() => setLoading((false));
	};

	return (
		<>
			<section className="main-container">
				<section className="movie-grid-wrapper">
					{tvshows.map((tvshow) => {
						return (
							<div className="movie-card-container">
								<div className="movie-card" key={tvshow.show_id}>
									<h1 className="movie-title">{tvshow.title} </h1>
									<Detail>{tvshow.director}</Detail>
									<Detail> {tvshow.release_year} </Detail>
									<Detail> {tvshow.country} </Detail>
									{/* <Detail> {movie.rating} </Detail> */}
									<Detail> {tvshow.duration} </Detail>
									<p className="description"> {tvshow.description} </p>
								</div>
							</div>
						);
					})}
				</section>
			</section>
		</>
	);
};
