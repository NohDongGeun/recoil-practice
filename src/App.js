import React from "react";
import { RecoilRoot } from "recoil";
import { CharacterCounter } from "./Recoil";

function App() {
  return (
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  );
}

export default App;
