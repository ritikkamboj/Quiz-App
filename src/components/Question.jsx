  import React from "react";

  function Question({ question, onAnsClick }) {
    return (
      <div>
        <h2>{question.question}</h2>
        <ul className="list">
          {question.answerOptions.map((options, i) => (
            <li className="opList" key={options.text}>{i+1}.<button className="button" onClick={()=> onAnsClick(options.isCorrect, options.text)}> {options.text}</button></li>
          ))}
        </ul>
      </div>
    );
  }

  export default Question;
