import { useEffect, useState } from "react";

const DummydataURL = "https://jsonplaceholder.typicode.com/todos";

const FetchDataUsingPromise = () => {
  const [fetchData, setFetchData] = useState<any>([]);

  useEffect(() => {
    fetch(DummydataURL)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setFetchData((prev: any) => {
          return [...prev, ...data];
        });
      });

    return () => {};
  }, []);

  return (
    <div>
      {
        // using fetching data
        fetchData
          .filter((item: any, index: number) => (index < 20 ? item : null))
          // mapping data into loop to show
          .map((item: any, index: number) => {
            return <p key={`${item.id} ${index}`}>{item.title}</p>;
          })
      }
    </div>
  );
};

export default FetchDataUsingPromise;
