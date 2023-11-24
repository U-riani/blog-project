import { useEffect, useState } from "react";

const useCostumHook = (url) => {
  const [data, setData] = useState(null);
  const [loadMessage, setLoadMessage] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const abortContr = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortContr.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("failed fetch");
          }
          return res.json();
        })
        .then((res) => {
          setData(res);
          setLoadMessage(false);
          setError('');
        })
        .catch((err) => {
          if (err.name === "abortError") {
            console.log("aborted");
          } else {
            setError(err.message);
            setLoadMessage(false);
            setData(null);
          }
        });
    }, 1000);
    return () => abortContr.abort();
  }, [url]);
  return { data, loadMessage, error };
};

export default useCostumHook;
