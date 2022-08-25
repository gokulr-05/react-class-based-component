import { useEffect, useState } from "react";

const CleanUp3 = () => {
  let [name1, setName1] = useState("");

  useEffect(() => {
    let t = setTimeout(() => {
      setName1("Gokul");
    }, 5000);

    return () => {
      console.log("Timeout cleared");
      clearTimeout(t);
    };
  }, []);

  return (
    <div>
      <h1>Cleanup3</h1>
      <h1>{name1}</h1>
    </div>
  );
};

export default CleanUp3;
