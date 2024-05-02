import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Hooks from "../Hooks/Hooks";
import HooksRouter from "../Hooks/HooksRouter";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hooks">
        <Route index element={<Hooks />} />
        <Route path=":id" element={<HooksRouter />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
