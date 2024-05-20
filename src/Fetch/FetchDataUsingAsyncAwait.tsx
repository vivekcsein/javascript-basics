import { useEffect, useState } from "react";

const DummydataURL = "https://jsonplaceholder.typicode.com/todos";

const FetchDataUsingAsyncAwait = () => {
  const [fetchData, setFetchData] = useState<any>([]);
  useEffect(() => {
    // use try catch block in async await to consider edge cases
    try {
      (async () => {
        const response = await fetch(DummydataURL);
        if (!response) return Error(`No response from server`);
        const data = await response.json();
        //   console.log(data);
        setFetchData((prev: any) => {
          return [...prev, ...data];
        });
      })();
    } catch (error) {}

    return () => {};
  }, []);

  if (!fetchData.length) return <h1>Data Loading...</h1>;

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

export default FetchDataUsingAsyncAwait;

// const fetchFun = async () => {
//   const response = await fetch(DummydataURL);
//   if (!response) return Error(`No response from server`);
//   const data = await response.json();
//   setFetchData((prev: any) => {
//     return [...prev, ...data];
//   });
// };
