import React from "react";
import Footer from "./Footer";

function QuestionTemplate({ index, question, count }) {
  const [show, setShow] = React.useState(true);
  const [isFlipped, setIsFlipped] = React.useState(true);
  const [status, setStatus] = React.useState("question");
  const [icon, setIcon] = React.useState("play-outline");


  if (show) {
    return (
      <div className={status} onClick={() => {
        setShow(false);
      }}>
        Pergunta {index + 1}
        <ion-icon
          name={icon}
          onClick={() => {
            setShow(false);
          }}
        ></ion-icon>
      </div>
    );
  } if(isFlipped) {
    return (      
      <div className="card-question">
        {question.Q}
        <img src="assets/setinha.png" alt="" onClick={() => {setIsFlipped(false)}}/>
      </div>
    );
  } if(!isFlipped) {
    return (
      <div className="card-answer">
        {question.A}
        <div className="wrong" onClick={() => {setShow(true); setIcon("close-circle"); setStatus("wrong-answer"); count()}}>Não lembrei</div>
        <div className="almost" onClick={() => {setShow(true); setIcon("help-circle"); setStatus("almost-answer"); count()}}>Quase não lembrei</div>
        <div className="right" onClick={() => {setShow(true); setIcon("checkmark-circle"); setStatus("right-answer"); count()}}>Zap!</div>
      </div>
    );
  }

}

const questions = [
  { Q: "O que é JSX?", A: "Uma extensão de linguagem do JavaScript" },
  {
    Q: "O React é __",
    A: "uma biblioteca JavaScript para construção de interfaces",
  },
  { Q: "Componentes devem iniciar com", A: "letra maiúscula" },
  { Q: "Podemos colocar __ dentro do JSX ", A: "expressões" },
];

function Cards({ invisible }) {
  const [count, setCount] = React.useState(0);
  function addCount () {
    setCount(count +1)
  }

  return (
    <div className={invisible}>
      <div className="title">
        <img className="logo-small" alt="" src="assets/logo-pequeno.png" />
        ZapRecall
      </div>
      <div className="questions">
        {questions.map((questions, index) => (
          <QuestionTemplate key={index} index={index} question={questions} count={addCount} />
        ))}
      </div>
      <div className="done">{count}/{questions.length} Concluídos</div>
    </div>
  );
}

export default Cards;
