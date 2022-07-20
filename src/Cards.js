import React from "react";

function Question({content}) {
  return (
    <div className="question">
      {content}
      <ion-icon name="play-outline"></ion-icon>
    </div>
  );
}

const questions = ["Pergunta 1", "Pergunta 2", "Pergunta 3", "Pergunta 4"];

function Cards() {
  return (
    <div className="page">
      <div className="title">
        <img className="logo-small" src="assets/logo-pequeno.png" />
        ZapRecall
      </div>
      <div className="questions">
         {questions.map((question) => (
          <Question content={question}/>
        ))} 
      </div>
      <div className="done">Concluídos</div>
    </div>
  );
}

export default Cards;
