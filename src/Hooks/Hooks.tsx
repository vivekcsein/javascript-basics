import { Link } from "react-router-dom";

const Hooks = () => {
  return (
    <div>
      <ul className="w-full  flex flex-row flex-wrap overflow-hidden gap-4 text-2xl underline ">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/hooks/usestate">useState</Link>
        </li>
        <li>
          <Link to="/hooks/useeffect">useEffect</Link>
        </li>
        <li>
          <Link to="/hooks/useref">useRef</Link>
        </li>
      </ul>
    </div>
  );
};

export default Hooks;
