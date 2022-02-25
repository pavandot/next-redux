import React from "react";

export const getStaticPaths = async () => {
	const response = await fetch(`https://jsonplaceholder.typicode.com/users/`);
	const data = await response.json();
	const paths = data.map((user) => {
		return {
			params: { id: user.id.toString() },
		};
	});
	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	console.log(context);
	const userId = context.params.id;
	const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`);
	const data = await response.json();
	return {
		props: { data },
		revalidate: 1,
	};
};

const UserAlbums = ({ data }) => {
	return (
		<div>
			{data.map((album) => {
				return (
					<div key={album.id}>
						<h1>{album.title}</h1>
					</div>
				);
			})}
		</div>
	);
};

export default UserAlbums;
