import React from "react";
import Image from "next/image";
const Tv = ({ tv }) => {
	return (
		<div className='m-3'>
			<section className='inline-block h-72 w-full'>
				<div className='rounded-lg  relative h-full '>
					<Image src={tv.posterImg} alt={tv.title} layout='fill' className='rounded-lg h-full w-full object-fill cursor-pointer' />
				</div>
				<div className='mx-3 my-3 mt-7'>
					<p className=' font-bold'>{tv.title}</p>
					<p className=' text-gray-500'>{tv.date}</p>
				</div>
			</section>
		</div>
	);
};

export default Tv;
