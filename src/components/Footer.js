function Footer({ count, questions, answerIcons }) {
  function isWrong(answer) {
    return answer === "close-circle";
  }

  if (!answerIcons.find(isWrong) && answerIcons.length === questions) {
    return (
      <div className="done">
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
      </div>
    );
  }

  if (answerIcons.find(isWrong) && answerIcons.length === questions) {
    return (
      <div className="done">
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
      </div>
    );
  }

  return (
    <div className="done">
      {count}/{questions} Concluídos
      <div className="answer-icons">
        {answerIcons.map((icon, index) => (
          <ion-icon key={index} name={icon}></ion-icon>
        ))}
      </div>
    </div>
  );
}

export default Footer;
