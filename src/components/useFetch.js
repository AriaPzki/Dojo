import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw Error("Could not fetch the data for the resourse");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((e) => {
        setError(e.message);
        setIsPending(false);
      });
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
