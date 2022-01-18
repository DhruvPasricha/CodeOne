import React from "react";
import { App as Ide } from "./Components/IDE/App";
import { App as WebEditor } from "./Components/Web Editor/App";
import useLocalStorage from "./hooks/useLocalStorage";

export const ToggleContext = React.createContext();

export default function App() {
  const [Editor, toggle] = useLocalStorage("editor", true);

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
