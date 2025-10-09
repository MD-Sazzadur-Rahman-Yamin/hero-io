import { useEffect, useState } from "react";

const useAPI = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    fetch("/appData.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch(error => setError(error))
      .finally(()=> setLoading(false));
  }, []);
  return {data, loading, error}
};
export default useAPI;
