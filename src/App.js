import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Playground from "./components/Playground";
import NavbarComp from "./components/Navbar";
import { languages } from "./components/Languages";

export default function App() {
  function comp(a, b) {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  }
  languages.sort(comp);
  const [currentLang, setCurrentLang] = useState(languages[0]);

  function handleClick(newLang, index) {
    let temp = currentLang;
    setCurrentLang(newLang);
    languages[index] = temp;
    while (index > 0 && languages[index - 1].name > currentLang) {
      languages[index] = languages[index - 1];
      index--;
    }
    languages[index] = temp;
  }

  return (
    <div>
      <NavbarComp changeLang={handleClick} currentLang={currentLang} />
      <Playground currentLang={currentLang} key={currentLang.name} />
    </div>
  );
}
