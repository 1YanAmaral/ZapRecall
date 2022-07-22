import React from "react";
import Footer from "./Footer";

function QuestionTemplate({ index, question, count }) {
  const [show, setShow] = React.useState(true);
  const [isFlipped, setIsFlipped] = React.useState(true);
  const [status, setStatus] = React.useState("question");
  const [icon, setIcon] = React.useState("play-outline");

  if (show) {
    return (
      <div
        className={status}
        onClick={() => {
          setShow(false);
        }}
      >
        Pergunta {index + 1}
        <ion-icon
          name={icon}
          onClick={() => {
            setShow(false);
          }}
        ></ion-icon>
      </div>
    );
  }
  if (status !== "question") {
    return (
      <div className={status}>
        Pergunta {index + 1}
        <ion-icon
          name={icon}
          onClick={() => {
            setShow(false);
          }}
        ></ion-icon>
      </div>
    );
  }
  if (isFlipped) {
    return (
      <div className="card-question">
        {question.Q}
        <img
          src="assets/setinha.png"
          alt=""
          onClick={() => {
            setIsFlipped(false);
          }}
        />
      </div>
    );
  }
  if (!isFlipped) {
    return (
      <div className="card-answer">
        {question.A}
        <div
          className="wrong"
          onClick={() => {
            setShow(true);
            setIcon("close-circle");
            setStatus("wrong-answer");
            count("close-circle");
          }}
        >
          Não lembrei
        </div>
        <div
          className="almost"
          onClick={() => {
            setShow(true);
            setIcon("help-circle");
            setStatus("almost-answer");
            count("help-circle");
          }}
        >
          Quase não lembrei
        </div>
        <div
          className="right"
          onClick={() => {
            setShow(true);
            setIcon("checkmark-circle");
            setStatus("right-answer");
            count("checkmark-circle");
          }}
        >
          Zap!
        </div>
      </div>
    );
  }
}

const objQuestions = [
  { Q: "O que é JSX?", A: "Uma extensão de linguagem do JavaScript" },
  {
    Q: "O React é __",
    A: "uma biblioteca JavaScript para construção de interfaces",
  },
  { Q: "Componentes devem iniciar com", A: "letra maiúscula" },
  { Q: "Podemos colocar __ dentro do JSX ", A: "expressões" },
  { Q: "O ReactDOM nos ajuda __ ", A: "interagindo com a DOM para colocar componentes React na mesma" },
  { Q: "Usamos o npm para __  ", A: "gerenciar os pacotes necessários e suas dependências" },
  { Q: "Usamos props para __", A: "passar diferentes informações para componentes" },
  { Q: "Usamos estado (state) para __ ", A: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
];

let questions = [];
function createCards() {
    objQuestions.forEach((value) => {
    questions.push({ ...value });
  });

  questions.sort(() => Math.random() - 0.5);

  return questions;
}

createCards();

function Cards({ invisible, setShow, setIsFlipped, setStatus, setIcon }) {
  const [count, setCount] = React.useState(0);
  const [answerIcons, setAnswerIcons] = React.useState([]);
  function addCount(icon) {
    if (count < questions.length) {
      setCount(count + 1);
      setAnswerIcons([...answerIcons, icon]);
    }
  }

  function restartRecall() {
    questions = [];
    setCount(0);
    setAnswerIcons([]);
    setShow=true;
    setIsFlipped=true;
    setStatus="question";
    setIcon="play-outline";
    createCards();
    <Cards invisible={invisible}/>
    console.log(questions);
  }

  return (
    <div className={invisible}>
      <div className="title-page">
        <img className="logo-small" alt="" src="assets/logo-pequeno.png" />
        ZapRecall
      </div>
      <div className="questions">
        {questions.map((questions, index) => (
          <QuestionTemplate
            key={index}
            index={index}
            question={questions}
            count={addCount}
          />
        ))}
      </div>
      <Footer
        count={count}
        questions={questions.length}
        answerIcons={answerIcons}
        restart={restartRecall}
        // setCount={setCount}
        // setAnswerIcons={setAnswerIcons}
        // show={show}
        // isFlipped={isFlipped}
        // status={status}
        // icon={icon}
        // setShow={setShow}
        // setIsFlipped={setIsFlipped}
        // setStatus={setStatus}
        // setIcon={setIcon}
        // createCards={createCards}
      />
    </div>
  );
}

export default Cards;
