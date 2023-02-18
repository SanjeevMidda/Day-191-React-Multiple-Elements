import React, {useState} from "react";
import "./styles.css";

function App() {

  const [number, setNumber] = useState(0);

  return (
    <div className="layout">
    <button onClick={() => {
      setNumber(number + 1);
    }}>+</button>

    <h1>{number}</h1>
    <h1>{number}</h1>
    <h1>{number}</h1>
    <h1>{number}</h1>
    <h1>{number}</h1>
    </div>
  );
}

export default App;
