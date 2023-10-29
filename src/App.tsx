import React, { useState } from "react";
import "./App.css";
import ItemsList from "./components/items-list/items-list";

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="container">
      <ItemsList count={count} onIncrement={handleIncrement} />
    </div>
  );
};

export default App;
