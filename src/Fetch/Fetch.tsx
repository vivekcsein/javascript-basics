import { Link } from "react-router-dom";

const Fetch = () => {
  return (
    <div>
      <ul className="w-full  flex flex-row flex-wrap overflow-hidden gap-4 text-2xl underline ">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/fetch/fetchdatausingpromises">
            Fetch Data Using Promises
          </Link>
        </li>
        <li>
          <Link to="/fetch/fetchdatausingasyncawait">
            Fetch Data Using Async-Await
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Fetch;
