function Footer({ count, questions, answerIcons, restart }) {
  function isWrong(answer) {
    return answer === "close-circle";
  }

  if (!answerIcons.find(isWrong) && answerIcons.length === questions) {
    return (
      <div className="done height">
        <div className="congrats">
          <img src="assets/party.png" alt="" />
          Parabéns!
        </div>
        <div className="message">Você não esqueceu de nenhum flashcard!</div>
        {count}/{questions} Concluídos
        <div className="answer-icons">
          {answerIcons.map((icon, index) => (
            <ion-icon key={index} name={icon}></ion-icon>
          ))}
        </div>
        <div className="start" onClick={restart}>
          REINICIAR RECALL
        </div>
      </div>
    );
  }

  if (answerIcons.find(isWrong) && answerIcons.length === questions) {
    return (
      <div className="done height">
        <div className="congrats">
          <img src="assets/sad.png" alt="" />
          Putz...
        </div>
        <div className="message">Ainda faltam alguns... Mas não desanime!</div>
        {count}/{questions} Concluídos
        <div className="answer-icons">
          {answerIcons.map((icon, index) => (
            <ion-icon key={index} name={icon}></ion-icon>
          ))}
        </div>
        <div className="start" onClick={restart}>
          REINICIAR RECALL
        </div>
      </div>
    );
  }

  return (
    <div className="done">
      <span>
        {count}/{questions} Concluídos
      </span>
      <div className="answer-icons">
        {answerIcons.map((icon, index) => (
          <ion-icon key={index} name={icon}></ion-icon>
        ))}
      </div>
    </div>
  );
}

export default Footer;
