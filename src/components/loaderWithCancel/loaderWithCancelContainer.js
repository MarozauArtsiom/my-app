import { useEffect, useState } from "react";

const LoaderWithCancelContainer = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    let isUnmounted = false;
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        if (!isUnmounted) {
          setData(json);
        }
      });
    return () => {
      isUnmounted = true;
    };
  }, []);

  return (
    <div>
      {data ? <div>{JSON.stringify(data)}</div> : <div>Loading...</div>}
    </div>
  );
};

export default LoaderWithCancelContainer;
