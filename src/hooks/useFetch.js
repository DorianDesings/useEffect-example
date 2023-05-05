import { useEffect, useState } from 'react';

const fetchData = async (fetchInfo, setFetchStatus, signal) => {
	const { url, options } = fetchInfo;

	try {
		const request = await fetch(url, options, signal);
		const data = await request.json();
		setFetchStatus({ data, loading: false, error: undefined });
	} catch (err) {
		setFetchStatus({ data: undefined, loading: false, error: err });
	}
};

export const useFetch = initialFetch => {
	const [fetchInfo, setFetchInfo] = useState(initialFetch);

	const [fetchStatus, setFetchStatus] = useState({
		data: undefined,
		loading: true,
		error: undefined
	});

	useEffect(() => {
		// El controlador hará que, en el caso de desmontar el componente que realiza la petición, se cancele la petición para evitar un memory leak
		const controller = new AbortController();

		fetchData(fetchInfo, setFetchStatus, controller.signal);

		return () => controller.abort();
	}, [fetchInfo]);

	return { ...fetchStatus, setFetchInfo };
	// El equivalente sería: return { data, loading, error, setFetchInfo };
};

/* 
  fetchInfo debe ser un objeto 
  {
    url:http://...,
    options:{
      method:'POST',
      body:JSON.stringify(...),
      headers:{
        'Content-Type': 'application/json'
      }
    }
  }

  Ejemplo de uso:

  setFetchInfo({
    url: http://localhost:3000/,
    options: {
      method: 'PATCH',
      body: JSON.stringify({ ...userInfo }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  })
*/
