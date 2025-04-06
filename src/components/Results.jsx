import React from 'react'

function Results({userAns , questions, reset}) {

    const correctAnswers = userAns.filter((ans)=> ans==='true');
    console.log(correctAnswers)
    const length = correctAnswers.length;
  return (
    <div>
        <h2>Results</h2>
        <p>Only {length} are correct from all {questions.length} questions </p>

    </div>
  )
}

export default Results