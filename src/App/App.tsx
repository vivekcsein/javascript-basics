// import Hooks_useState from "../Hooks/Hooks_useState";
// import { Link } from "react-router-dom";
import AppRouter from "./AppRouter";
import Line from "./Line";

function App() {
  return (
    <>
      <h1 className=" text-textLight text-center pb-4 bg-black">
        Hello React by <span className="text-textDark text-8xl">vivekcse</span>
      </h1>
      <Line />
      <div className=" min-h-[72vh] m-5 ">
        <AppRouter />
      </div>
      <div className="w-full">
        <h3 className="text-center">learn reactjs by vivekcse</h3>
      </div>
    </>
  );
}

export default App;
