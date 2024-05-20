import { Link } from "react-router-dom";

const Children = () => {
  return (
    <div>
      <ul className="w-full  flex flex-row flex-wrap overflow-hidden gap-4 text-2xl underline ">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/children/childrenpassedintocomponent">Children Passed into component</Link>
        </li>
      </ul>
    </div>
  );
};

export default Children;
