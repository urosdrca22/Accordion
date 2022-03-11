import data from './data.js';
import React, { useState } from 'react';
import SingleQuestion from './SingleQuestion';
import './App.css';

function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className="container">
      <h1 className="title">Frequently Asked Questions</h1>
        <section>
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
