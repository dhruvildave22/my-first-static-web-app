import React from "react";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Card />
      <div>App.js {process.env.REACT_APP_DT_CLIENT_ID}</div>
    </>
  );
}

export default App;
