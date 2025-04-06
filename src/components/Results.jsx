import React from "react";

function Results({ userAns, questions, reset }) {
  const correctAnswers = userAns.filter((ans) => ans === true);
  console.log(correctAnswers);
  const length = correctAnswers.length;
  return (  
    <div>
      <h2>Results</h2>
      <div>
      <div className="spanLine"> <p> Only {length} are correct from all {questions.length} questions</p> <span className="span" onClick={reset}>Click here to reset</span></div>
      </div>
      <ul className="resList">
        {questions.map((question, index)=> <li data-correct={userAns[index]} key={question.question}>{index+1}. {question.question}</li>)}
      </ul>
    </div>
  );
}

export default Results;
