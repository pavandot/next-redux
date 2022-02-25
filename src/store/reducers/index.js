import * as type from "../types";
import { HYDRATE } from "next-redux-wrapper";
const initialState = {
	movies: {},
	tv: {},
};

export const mediaReducer = (state = initialState, actions) => {
	switch (actions.type) {
		case HYDRATE: {
			if (actions.payload) return { ...state, ...actions.payload };
		}
		case type.GET_MOVIE_DETAILS: {
			return { ...state, movies: actions.payload };
		}
		case type.GET_TV_DETAILS: {
			return { ...state, tv: actions.payload };
		}
		default:
			return state;
	}
};
