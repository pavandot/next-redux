import React from "react";
import { wrapper } from "../store/store";
import { fetchMovieDetails } from "../store/actions";
import Movie from "../components/movie";
import { useSelector } from "react-redux";

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
	await store.dispatch(fetchMovieDetails());
});

const Movies = () => {
	const movies = useSelector((state) => state.movies);
	return (
		<>
			<h1 className='text-center text-2xl font-semibold'>Server Side Rendering (SSR)</h1>
			<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 m-4 sm:m-6 md:m-10 '>
				{movies.map((movie) => {
					return (
						<div key={movie.id}>
							<Movie movie={movie} />
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Movies;
