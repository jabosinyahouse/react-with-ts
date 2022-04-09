import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

interface IState {
  people: {
    name: string;
    age: number;
    number: string;
    note?: string;
  }[];
}

function App() {
  // const [number, setNumber] = useState<number>(5);
  const [people, setPeople] = useState<IState["people"]>();

  // const changeNumber = () => {
  //   let result = number + 1;
  //   setNumber(result);
  // };

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      {/* <button onClick={() => changeNumber()}>Clckic meh</button> */}
      {/* {number} */}
    </div>
  );
}

export default App;
