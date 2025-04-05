import React, { useState } from 'react'
import './App.css'
import Questions from './data/qa.json';
import Question from './components/Question';

function App() {
  const [currQuestion , setCurrQuestion] = useState(0);
  const [userAns, setUserAns] = useState([]);


const handleNextQuestion = (data)=>{
  setCurrQuestion(currQuestion+1);
  setUserAns([...userAns ,data ])

}

  return (
    <div className='app'>
      <h1>The JavaScript Quiz App</h1>

     {currQuestion < Questions.length &&  <Question question= {Questions[currQuestion]} onAnsClick={handleNextQuestion}/>}

    </div>
  )
}

export default App