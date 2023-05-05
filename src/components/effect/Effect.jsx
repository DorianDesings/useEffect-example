import { useEffect, useState } from 'react';

const Effect = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		window.addEventListener('scroll', handleResize);

		return () => window.removeEventListener('scroll', handleResize);
	});

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

const handleResize = () => console.log('RESIZE');

export default Effect;
