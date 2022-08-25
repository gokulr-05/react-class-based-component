import { useEffect, useState } from "react";

const HookMouse = () => {
  let [x, setX] = useState(0);
  let [y, setY] = useState(0);

  function mouseHandler(e) {
    console.log(e);
    console.log("MOUSE Moved");
    setX(e.clientX);
    setY(e.clientY);
  }

  useEffect(() => {
    console.log("hookMouse");
    window.addEventListener("mousemove", mouseHandler);

    return function () {
      window.removeEventListener("mousemove", mouseHandler);
    };
  }, []);

  return (
    <div>
      <h1>
        X-{x} Y-{y}
      </h1>
    </div>
  );
};

export default HookMouse;
