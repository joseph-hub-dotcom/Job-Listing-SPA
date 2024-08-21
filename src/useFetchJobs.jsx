import { useState, useEffect } from 'react';

const useFetchJobs = (url) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setJobs(data.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchJobs();
  }, [url]);

  return { jobs, loading, error };
};

export default useFetchJobs;
