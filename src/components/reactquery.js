import { useQuery } from '@tanstack/react-query';

export function QueryComponent() {
	// Fetcher function
	const getFacts = async () => {
		const res = await fetch('https://dummyjson.com/users?limit=10&select=id,firstName,lastName,email,gender,phone');
		return res.json();
	};
	// Using the hook
	const {data, error, isLoading} = useQuery({ queryKey: ['users'], queryFn: getFacts });
	// Error and Loading states
	if (error) return <div>Request Failed</div>;
	if (isLoading) return <div>Loading...</div>;
	// Show the response if everything is fine
	return (
		<div>
			<h1>Random Fact:</h1>
			<p> {data.users} abcde </p>
		</div>
	);
}