import data from './data.js';
import React, { useState } from 'react';
import SingleQuestion from './SingleQuestion';
import './App.css';

function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <section>
      {questions.map((question) => {
        return <SingleQuestion key={question.id} {...question} />
      })}
    </section>
  );
}

export default App;
