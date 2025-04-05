import React from "react";

function Question({ question, onAnsClick }) {
  return (
    <div>
      <h2>{question.question}</h2>
      <ul className="list">
        {question.answerOptions.map((options, i) => (
          <li key={options.text}><button className="button" onClick={()=> onAnsClick(options.isCorrect)}>{i} {options.text}</button></li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
