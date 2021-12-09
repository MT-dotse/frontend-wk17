import React from 'react';
import { MovieList } from 'components/MovieList';
import { Header } from 'components/Header';

export const App = () => {
	return (
		<div>
			<Header />
			<MovieList />
		</div>
	);
};
