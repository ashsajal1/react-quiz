import { useState } from "react";
import { MouseEventHandler } from 'react';

type Question = {
  id: Number,
  question: String,
  options: String[],
  answer: String,
  userSelectedAnswer?: String
}

export default function App() {

  const initialQuestions: Question[] = [
    {
      id: 1,
      question: "2 + 2 = ?",
      options: ['4', '3', '2', '5'],
      answer: '4'
    },
    {
      id: 2,
      question: "3 + 2 = ?",
      options: ['4', '3', '2', '5'],
      answer: '5'
    },
    {
      id: 3,
      question: "1 + 2 = ?",
      options: ['4', '3', '2', '5'],
      answer: '3'
    },
    {
      id: 4,
      question: "2 + 4 = ?",
      options: ['4', '3', '2', '6'],
      answer: '6'
    },
  ];

  const handleAnswer: MouseEventHandler<HTMLParagraphElement> = (event) => {
    const questionId = parseInt(event.currentTarget.dataset.questionId!);
    const option = event.currentTarget.dataset.option!;

    // Create a new object with the updated userselectedanswer attribute
    const updatedQuestion = {
      ...questions.find((q) => q.id === questionId)!,
      userSelectedAnswer: option
    };

    // Create a new array with the updated question object
    const updatedQuestions = questions.map((q) =>
      q.id === questionId ? updatedQuestion : q
    );

    // Update the state with the new array of questions
    setQuestions(updatedQuestions);
  };

  const handleSubmit = () => {
    for (let i = 0; i < questions.length; i++) {
      if (questions[i].userSelectedAnswer === questions[i].answer) {
        setScore((preVal) => preVal + 1)
      }
    }

    setDoShowScore(true)
    // alert(`Your score is ${score} out of ${questions.length}`);
  };

  const handleShowAnswer = () => {
    setDoShowAnswers(true)
  }

  const [score, setScore] = useState(0)
  const [questions, setQuestions] = useState<Question[]>(initialQuestions)
  const [doShowScore, setDoShowScore] = useState<Boolean>(false)
  const [doShowAnswers, setDoShowAnswers] = useState<Boolean>(false)

  if (doShowAnswers) {
    return (<>
      <section>
        <h2>You scored {score} out of {questions.length}!</h2>

        {questions.map((question, index) => (
          <div key={index} className={`question ${question.answer === question.userSelectedAnswer ? "correct-answer" : 'incorrect-answer'}`}>
            <h1>{question.question}</h1>
            {question.options.map((option, index) => (
              <p key={index}
                className={`option ${question?.userSelectedAnswer === option && question.answer !== question.userSelectedAnswer ? 'wrong' : ''} ${question.answer === option ? 'correct' : ''}`}> {option} </p>
            ))}

          </div>
        ))}

      </section>
    </>)
  }


  if (doShowScore) {
    return (<>
      <section>
        <h2>You scored {score} out of {questions.length}!</h2>
        <button onClick={handleShowAnswer}>Check Answers</button>
      </section>
    </>)
  }


  return (
    <>
      <section>
        {questions.map((question, index) => (
          <div className="question gray" key={index}>
            <h1>{question.question}</h1>
            {question.options.map((option, index) => (
              <p key={index}
                data-question-id={question.id}
                data-option={option}
                onClick={handleAnswer}
                className={`option ${question?.userSelectedAnswer === option ? 'selected' : ''}`}> {option} </p>
            ))}

          </div>
        ))}

        <button onClick={handleSubmit}>Submit Quiz</button>
      </section>

    </>
  )
}
