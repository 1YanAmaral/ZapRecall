import React from "react";

function LandingPage() {
    const [visible, setVisible] = React.useState("page");
    const [invisible, setInvisible] = React.useState("hidden");
    function callCards() {    
    setVisible("hidden");
    setInvisible("page");
  }

  return (
    <div className={visible}>
      <img className="logo" src="assets/logo.png" />
      <div className="title">ZapRecall</div>
      <div className="start" onClick={callCards}>Iniciar Recall!</div>
    </div>
  );
}

export default LandingPage;
