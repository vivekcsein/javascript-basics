import { useParams } from "react-router-dom";
import NotFound from "../App/NotFound";

import FetchDataUsingPromise from "./FetchDataUsingPromise";
import FetchDataUsingAsyncAwait from "./FetchDataUsingAsyncAwait";

const FetchRouter = () => {
  const { id } = useParams();
  switch (id) {
    case "fetchdatausingpromises":
      return <FetchDataUsingPromise />;
    case "fetchdatausingasyncawait":
      return <FetchDataUsingAsyncAwait />;

    default:
      return <NotFound />;
  }
};

export default FetchRouter;
