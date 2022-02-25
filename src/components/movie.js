import React, { useEffect } from "react";
import Image from "next/image";
const Movie = ({ movie }) => {
	return (
		<div className='m-3'>
			<section className='inline-block h-72 w-full'>
				<div className='rounded-lg  relative h-full '>
					<Image src={movie.posterImg} alt={movie.title} layout='fill' className='rounded-lg h-full w-full object-fill cursor-pointer' />
				</div>
				<div className='mx-3 my-3 mt-7'>
					<p className=' font-bold'>{movie.title}</p>
					<p className=' text-gray-500'>{movie.date}</p>
				</div>
			</section>
		</div>
	);
};

export default Movie;
