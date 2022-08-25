// import Users from "./components/Users";
// import UserFinder from "./components/UserFinder";
// import ErrorBoundary from "./components/ErrorBoundary";
import HookMouse from "./components/HookMouse";
import { useState } from "react";
import CleanUp2 from "./components/CleanUp2";
import CleanUp3 from "./components/CleanUp3";

function App() {
  let [toggle, setToggle] = useState(false);
  let [toggle1, setToggle1] = useState(false);
  let [toggle2, setToggle2] = useState(true);
  return (
    <div>
      {/* <ErrorBoundary> */}
      {/* <UserFinder /> */}
      <button
        onClick={() => {
          setToggle((prev) => {
            return !prev;
          });
        }}
      >
        Toggle Mouse Event
      </button>
      {toggle && <HookMouse />}
      <br />
      <button
        onClick={() => {
          setToggle1((prev) => {
            return !prev;
          });
        }}
      >
        Toggle fetch
      </button>
      {toggle1 && <CleanUp2 />}
      <br />
      <button
        onClick={() => {
          setToggle2((prev) => {
            return !prev;
          });
        }}
      >
        Toggle setTimeOut
      </button>
      {toggle2 && <CleanUp3 />}

      {/* </ErrorBoundary> */}
    </div>
  );
}

export default App;
