import React from "react";

export const getServerSideProps = async (context) => {
	const userId = context.params.id;
	const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
	const posts = await response.json();
	return {
		props: { posts },
	};
};

const UserId = ({ posts }) => {
	return (
		<div>
			{posts.map((post) => {
				return (
					<div key={post.id} className='bg-white m-5 p-5 rounded-lg'>
						<h1 className='font-bold text-xl'>{post.title}</h1>
						<p>{post.body}</p>
					</div>
				);
			})}
		</div>
	);
};

export default UserId;
