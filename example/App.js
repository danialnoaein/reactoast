import React from "react";
import { useReacToast } from "../src/index";

const App = (props) => {
  console.log(useReacToast("Everything Is OK"));
  return (
    <>
      <div>HELOOO</div>
    </>
  );
};
export default App;
