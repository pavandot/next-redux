import Link from "next/link";
export const getServerSideProps = async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/users");
	const userData = await response.json();
	return {
		props: { userData },
	};
};

const User = ({ userData }) => {
	return (
		<div className='grid grid-cols-4 gap-5'>
			{userData &&
				userData.map((user) => {
					return (
						<div key={user.id} className=' bg-white rounded-lg text-center p-5 cursor-pointer'>
							<h1>{user.name}</h1>
							<h2>{user.email}</h2>
							<div className='flex justify-between mt-2'>
								<Link href={`/users/posts/${user.id}`}>
									<a className=' bg-indigo-400 p-1 rounded-md text-white'>View Posts</a>
								</Link>
								<Link href={`/users/album/${user.id}`}>
									<a className=' bg-indigo-400 p-1 rounded-md text-white'>View albums</a>
								</Link>
							</div>
						</div>
					);
				})}
		</div>
	);
};

export default User;
