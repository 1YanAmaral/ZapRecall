import React from "react";

function LandingPage() {
    const [visible, setVisible] = React.useState("page");
    function callCards() {    
    setVisible("hidden");
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
