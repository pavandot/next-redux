import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
	return (
		<div className='bg-gray-100'>
			<div className='w-4/5 m-auto min-h-screen'>
				<Navbar />
				{children}
			</div>
		</div>
	);
};

export default Layout;
