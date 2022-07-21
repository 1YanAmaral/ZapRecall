import React from "react";
import LandingPage from "./LandingPage";
import Cards from "./Cards";

function App() {
  const [visible, setVisible] = React.useState("page");
  const [invisible, setInvisible] = React.useState("hidden");
  function callCards() {
    setVisible("hidden");
    setInvisible("page");
  }

  return (
    <>
      <LandingPage visible={visible} callCards={callCards}/>
      <Cards invisible={invisible}/>
    </>
  );
}

export default App;
