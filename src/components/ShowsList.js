import React, { useState, useEffect } from 'react';
import styled from 'styled-components'; //import Styled component

const Detail = styled.div`
	font-size: 16px;
	font-family: 'Bebas Neue', cursive;
	color: white;
`;

export const ShowsList = () => {
	const [shows, setShows] = useState([]);
	//const [loading, setLoading] = useState (false);

	useEffect(() => {
		fetchAllShows();
	}, []);

	const fetchAllShows = () => {
		//setLoading(true);
		fetch('https://mtdose-netflix-shows.herokuapp.com/shows')
			.then((res) => res.json())
			.then((data) => setShows(data.response));
		//.finally (() => setLoading((false));
	};

	return (
		<>
			<section className="main-container">
				<section className="movie-grid-wrapper">
					{shows.map((show) => {
						return (
							<div className="movie-card-container">
								<div className="movie-card" key={show.show_id}>
									<h1 className="movie-title">{show.title} </h1>
									<Detail>{show.director}</Detail>
									<Detail> {show.release_year} </Detail>
									<Detail> {show.country} </Detail>
									{/* <Detail> {movie.rating} </Detail> */}
									<Detail> {show.duration} </Detail>
									<p className="description"> {show.description} </p>
								</div>
							</div>
						);
					})}
				</section>
			</section>
		</>
	);
};
