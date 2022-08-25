import { useEffect, useState } from "react";

const CleanUp2 = () => {
  let abortController = new AbortController();
  let [name, setName] = useState("");
  useEffect(() => {
    // async function fetching() {
    //   let res = await fetch(
    //     "https://627f71ccbe1ccb0a465fd36c.mockapi.io/students"
    //   );
    //   let data = await res.json();
    //   console.log("data=", data);
    // }
    // fetching();

    fetch("https://627f71ccbe1ccb0a465fd36c.mockapi.io/students", {
      signal: abortController.signal,
    })
      .then((val) => {
        // let data = val.json();
        val.json().then((val1) => {
          console.log(val1);
          setName(val1[0].name);
        });
      })
      .catch((err) => {
        console.log(err);
      });

    return function () {
      abortController.abort();
    };
  }, []);

  return (
    <div>
      <h1>Cleanup2</h1>
      <h1>{name}</h1>
    </div>
  );
};

export default CleanUp2;
