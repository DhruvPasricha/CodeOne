import React, { useState } from "react";
import { App as Ide } from "./Components/IDE/App";
import { App as WebEditor } from "./Components/Web Editor/App";

export const ToggleContext = React.createContext();

export default function App() {
  const [Editor, toggle] = useState(true);

  function handleClick() {
    toggle(!Editor);
  }

  if (Editor === true) {
    return (
      <div>
        <ToggleContext.Provider value={handleClick}>
          <Ide />
        </ToggleContext.Provider>
      </div>
    );
  } else {
    return (
      <div>
        <ToggleContext.Provider value={handleClick}>
          <WebEditor />
        </ToggleContext.Provider>
      </div>
    );
  }
}
