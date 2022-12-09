import React, { useEffect, useState } from "react";

function HookCounterOne() {
  const [click, setClick] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("Updating the useEffect");
    document.title = `Clicked ${click} times`;
  }, [click]);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setClick((prevCount) => prevCount + 1)}>
        Clicked {click} times
      </button>
    </div>
  );
}

export default HookCounterOne;
