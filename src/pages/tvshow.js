import React from "react";
import { wrapper } from "../store/store";
import { useSelector } from "react-redux";
import { fetchTvDetails } from "../store/actions";
import Tv from "../components/tv";
export const getStaticProps = wrapper.getStaticProps((store) => async () => {
	await store.dispatch(fetchTvDetails());
	return {
		props: {},
		revalidate: 10,
	};
});

const TvShow = () => {
	const tv = useSelector((state) => state.tv);
	return (
		<>
			<h1 className='text-center text-2xl font-semibold'>Static Site Generation (SSG)</h1>
			<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 m-4 sm:m-6 md:m-10 '>
				{tv.map((tv) => {
					return (
						<div key={tv.id}>
							<Tv tv={tv} />
						</div>
					);
				})}
			</div>
		</>
	);
};

export default TvShow;
