import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Icons from "./components/Icons";

function App() {
  const [action, setAction] = useState("");
  const [state, setState] = useState(true);
  const [onReset, setOnReset] = useState(false);

  // const handleClick = (e) => {
  //   setAction(e.target.value);
  //   if (action === "Approve" || action === "Reject") {
  //     setState(false);
  //     setOnReset(true);
  //   } else {
  //     setState(true);
  //     setOnReset(false);
  //   }
  //   console.log(action);
  // };

  const handleClick = (e) => {
    setAction(e.target.value);
    setState(false);
    setOnReset(true);
  };
  const handleReset = (e) => {
    setAction(e.target.value);
    setState(true);
    setOnReset(false);
  };

  return (
    <div className="App">
      <div className="container">
        <h3
          className="reuseable"
          style={{ display: state ? "inline" : "none" }}
        >
          Button Task (with Bootstrap) with reusable button component
        </h3>
        <header className="App-header">
          <div className="row ">
            <div className="col" style={{ display: state ? "inline" : "none" }}>
              <Button
                handleClick={handleClick}
                text="Approve"
                className="btn btn-success m-5"
              />
            </div>
            <div className="col" style={{ display: state ? "inline" : "none" }}>
              <Button
                handleClick={handleClick}
                text="Reject"
                className="btn btn-danger m-5"
              />
            </div>
          </div>
          <div className="c" style={{ display: onReset ? "inline" : "none" }}>
            <Icons action={action} />
            <Button
              handleReset={handleReset}
              text="Reset"
              className="btn btn-primary m-5"
            />
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
