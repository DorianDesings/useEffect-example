import { useRef } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const Intersection = () => {
	const ref = useRef(null);
	const isIntersecting = useIntersectionObserver(ref, { threshold: 1 });

	return (
		<>
			<div
				ref={ref}
				style={{ width: '100px', height: '100px', backgroundColor: 'red' }}
			></div>

			{isIntersecting ? (
				<h1>El elemento está visible en la pantalla.</h1>
			) : (
				<h1>El elemento aún no está visible en la pantalla.</h1>
			)}
		</>
	);
};

export default Intersection;
