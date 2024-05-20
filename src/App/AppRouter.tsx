import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Hooks from "../Hooks/Hooks";
import HooksRouter from "../Hooks/HooksRouter";
import Fetch from "../Fetch/Fetch";
import FetchRouter from "../Fetch/FetchRouter";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hooks">
        <Route index element={<Hooks />} />
        <Route path=":id" element={<HooksRouter />} />
      </Route>
      <Route path="/fetch">
        <Route index element={<Fetch />} />
        <Route path=":id" element={<FetchRouter />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
