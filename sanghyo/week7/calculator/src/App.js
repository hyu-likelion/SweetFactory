import React from "react";
import './App.css';
import Calculator from "./Calculator"


class App extends React.Component {
  render() {
    return (
      <div className="outer">
        <Calculator />
      </div>
    );
  }
}

export default App;
