import React, { useState } from "react";
import { App as Ide } from "./Components/IDE/App";
import { App as WebEditor } from "./Components/Web Editor/App";

export default function App() {
  const [Editor, toggle] = useState(false);

  function handleClick() {
    toggle(!Editor);
  }

  if (Editor === false) {
    return (
      <div>
        {/* <button onClick={handleClick}>toggle</button> */}
        <Ide />
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={handleClick}>toggle</button>
        <WebEditor />
      </div>
    );
  }
}
