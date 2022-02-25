import * as type from "../types";
export const getMovieDetails = (data) => ({ type: type.GET_MOVIE_DETAILS, payload: data });
export const fetchMovieDetails = () => async (dispatch) => {
	const res = await fetch("http://localhost:3500/movies");
	const data = await res.json();
	dispatch(getMovieDetails(data));
};

export const getTvDetails = (data) => ({ type: type.GET_TV_DETAILS, payload: data });
export const fetchTvDetails = () => async (dispatch) => {
	const res = await fetch("http://localhost:3500/tv");
	const data = await res.json();
	dispatch(getTvDetails(data));
};
