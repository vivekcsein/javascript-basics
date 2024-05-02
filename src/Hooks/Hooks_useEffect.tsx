import { useState } from "react";

const Hooks_useEffect = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <button
        className="w-5 h-2 bg-primary rounded mr-4"
        onClick={() => setCount((c) => c + 1)}
      ></button>
      <p>{count}</p>
      <button
        className="w-5 h-2 bg-primary rounded mr-4"
        onClick={() => setCount((c) => c - 1)}
      ></button>
    </>
  );
};

export default Hooks_useEffect;
