import { useState } from "react";

const Hooks_useState = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          console.log(e.currentTarget);
          setCount((c) => c + 1);
        }}
      ></button>
      <span>Clicked{count}times</span>
    </>
  );
};

export default Hooks_useState;
