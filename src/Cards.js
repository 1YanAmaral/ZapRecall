import React from "react";

function QuestionTemplate({ index }) {
  const [show, setShow] = React.useState(true);

  if (show) {
    return (
      <div className="question">
        Pergunta {index + 1}
        <ion-icon
          name="play-outline"
          onClick={() => {
            setShow(false);
          }}
        ></ion-icon>
      </div>
    );
  } else {
    return (
      <div className="unflipped">
        O que é JSX?
        <img src="assets/setinha.png" alt="" onClick={() => {setShow(true)}}/>
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
  return (
    <div className={invisible}>
      <div className="title">
        <img className="logo-small" src="assets/logo-pequeno.png" />
        ZapRecall
      </div>
      <div className="questions">
        {questions.map((questions, index) => (
          <QuestionTemplate key={index} index={index} />
        ))}
      </div>
      <div className="done">Concluídos</div>
    </div>
  );
}

export default Cards;
