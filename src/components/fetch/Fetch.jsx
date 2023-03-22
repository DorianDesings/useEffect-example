import { useEffect, useState } from 'react';

const fetchData = async (url, signal, setData) => {
	const res = await fetch(url, signal);
	const data = await res.json();
	setTimeout(() => setData(data), 3000);
};

const Fetch = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const controller = new AbortController();
		fetchData(
			'https://jsonplaceholder.typicode.com/users',
			controller.signal,
			setData
		);
		return () => controller.abort();
	}, []);

	if (data.length === 0) return <p>Loading...</p>;

	return data.map(user => {
		return <p>{user.name}</p>;
	});
};

export default Fetch;
