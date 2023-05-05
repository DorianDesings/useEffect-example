import { useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = (ref, options) => {
	const [isIntersecting, setIntersecting] = useState(false);
	const observer = useRef(null);

	useEffect(() => {
		if (observer.current) {
			observer.current.disconnect();
		}

		observer.current = new IntersectionObserver(([entry]) => {
			setIntersecting(entry.isIntersecting);
		}, options);

		if (ref.current) {
			observer.current.observe(ref.current);
		}

		return () => {
			observer.current.disconnect();
		};
	}, [ref, options]);

	return isIntersecting;
};
