import { useEffect, useState } from 'react';

const Effect = () => {
	const [count, setCount] = useState(0);

	console.log('Render, antes de useEffect');

	useEffect(() => {
		console.log('useEffect');
	});
	console.log('Render, después de useEffect');

	return (
		<div>
			<h1>{count}</h1>
			<button
				onClick={() => {
					setCount(count + 1);
					document.title = count + 1;
				}}
			>
				+1
			</button>
			<button
				onClick={() => {
					setCount(count + 2);
					document.title = count + 2;
				}}
			>
				+2
			</button>
		</div>
	);
};

export default Effect;
