import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [value, setValue] = useState(10);

  const setToValue = (newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      {value}
      <button onClick={() => setToValue(1000)}>Mil</button>
      <button onClick={() => setToValue(0)}>Recetear</button>
      <button onClick={() => setToValue(value + 1)}>Incrementar</button>
    </div>
  );
};

export default App;
