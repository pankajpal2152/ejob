import React from "react";
import ParentComp from "./components/ParentComp";

const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>AppComp:</h2>
      <ParentComp />
    </div>
  );
};

export default App;