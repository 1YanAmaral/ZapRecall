import React from "react";

function LandingPage({ visible, callCards }) {
  return (
    <div className={visible}>
      <img className="logo" alt="" src="assets/logo.png" />
      <div className="title">ZapRecall</div>
      <div className="start" onClick={callCards}>
        Iniciar Recall!
      </div>
    </div>
  );
}

export default LandingPage;
