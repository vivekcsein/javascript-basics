import { useParams } from "react-router-dom";
import Hooks_useState from "./Hooks_useState";
import Hooks_useRef from "./Hooks_useRef";
import Hooks_useEffect from "./Hooks_useEffect";
import NotFound from "../App/NotFound";

const HooksRouter = () => {
  const { id } = useParams();
  switch (id) {
    case "usestate":
      return <Hooks_useState />;
    case "useref":
      return <Hooks_useRef />;
    case "useeffect":
      return <Hooks_useEffect />;

    default:
      return <NotFound />;
  }
};

export default HooksRouter;
