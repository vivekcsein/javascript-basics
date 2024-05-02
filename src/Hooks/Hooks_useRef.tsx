import { useEffect, useRef } from "react";

const Hooks_useRef = () => {
  const inputElem = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputElem.current) {
      console.log(inputElem.current.value);
    }

    return () => {};
  }, []);

  return (
    <div>
      <input
        type="username"
        name="username"
        ref={inputElem}
        placeholder="Username"
      />
    </div>
  );
};

export default Hooks_useRef;
