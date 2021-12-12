import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { Movies } from 'pages/Movies';
import { TvShows } from 'pages/TvShows';

const Nav = styled.nav`
	color: white;
	height: 100px;
`;

export const NavBar = () => {
	return (
		<Nav>
			<BrowserRouter>
				<Routes>
					{/* <NavLink to="/" className="page-title">
				Netflix titles
			</NavLink> */}

					<Route path="Movies" element={<Movies />}>
						Movies
					</Route>

					<Route path="Movies" element={<TvShows />}>
						TV-Shows
					</Route>
				</Routes>
			</BrowserRouter>
		</Nav>
	);
};
