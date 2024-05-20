import { useParams } from "react-router-dom";
import NotFound from "../App/NotFound";
import ChildrenPassedIntoComponent from "./ChildrenPassedIntoComponent";
import ChildrenComponent from "./ChildrenComponent";

const ChildrenRouter = () => {
  const { id } = useParams();
  switch (id) {
    case "childrenpassedintocomponent":
      return (
        <ChildrenPassedIntoComponent>
          {" "}
          <ChildrenComponent />{" "}
        </ChildrenPassedIntoComponent>
      );

    default:
      return <NotFound />;
  }
};

export default ChildrenRouter;
