import React from "react";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
	return (
		<div className='flex justify-between items-center'>
			<Link href='/' passHref>
				<a className='cursor-pointer'>
					<Image src='/logo.svg' alt='logo' width='108' height='110' />
				</a>
			</Link>
			<div className='space-x-3 text-lg font-semibold'>
				<Link href='/'>
					<a>Movies</a>
				</Link>
				<Link href='/tvshow'>
					<a>Tv Shows</a>
				</Link>
				<Link href='/users'>
					<a>Users</a>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
