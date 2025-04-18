import React, { useState } from "react";
import "./App.css";
import Questions from "./data/qa.json";
import Question from "./components/Question";
import Results from "./components/Results";

function App() {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [userAns, setUserAns] = useState([]);
  const [ansSelected , setAnsSelected] = useState([]);

  const handleNextQuestion = (data, selected) => {
    setCurrQuestion(currQuestion + 1);
    setUserAns([...userAns, data]);
    setAnsSelected([...ansSelected, selected])

    console.log(userAns);
    console.log(ansSelected)
  };

  const reset = () => {
    setCurrQuestion(0);
    setUserAns([]);
  };

  return (
    <div className="app">
      <h1>The JavaScript Quiz App</h1>

      {currQuestion < Questions.length && (
        <Question
          question={Questions[currQuestion]}
          onAnsClick={handleNextQuestion}
        />
      )}

      {userAns.length === Questions.length && (
        <Results userAns={userAns} questions={Questions} reset={reset} />
      )}
    </div>
  );
}

export default App;
