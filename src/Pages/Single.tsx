import { useState } from "react";
import { MouseEventHandler } from 'react';
import ShowAnswer from "../components/ShowAnswer";
import ShowScore from "../components/ShowScore";

type Question = {
  id: Number,
  question: String,
  options: String[],
  answer: String,
  userSelectedAnswer?: String
}

export default function Single() {

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
    setQuestions(questions.map(q => q.id === questionId ? { ...q, userSelectedAnswer: option } : q));
  };

  const handleSubmit = () => {
    for (let i = 0; i < questions.length; i++) {
      if (questions[i].userSelectedAnswer === questions[i].answer) {
        setScore((preVal) => preVal + 1)
      }
    }

    setDoShowScore(true)
  };

  const handleShowAnswer = () => {
    setDoShowAnswers(true)
  }


  const [score, setScore] = useState(0)
  const [questions, setQuestions] = useState<Question[]>(initialQuestions)
  const [doShowScore, setDoShowScore] = useState<boolean>(false)
  const [doShowAnswers, setDoShowAnswers] = useState<boolean>(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0)

  const currentQuestion = questions[currentQuestionIndex]

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    }
  };

  const goToPrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prevIndex => prevIndex - 1);
    }
  };

  if (doShowAnswers) {
    return (
      <ShowAnswer score={score} questions={questions} />
    )
  }

  if (doShowScore) {
    return (<ShowScore score={score} questionLength={questions.length} handleShowAnswer={handleShowAnswer} />)
  }

  return (
    <>
      <section className="single-question">

        <div className="question question-bg">
          <div className="badge">{currentQuestionIndex + 1} of {questions.length}</div>
          <h1>{currentQuestion.question}</h1>
          {currentQuestion.options.map((option, index) => (
            <p key={index}
              data-question-id={currentQuestion.id}
              data-option={option}
              onClick={handleAnswer}
              className={`option ${currentQuestion?.userSelectedAnswer === option ? 'selected' : ''}`}> {option} </p>
          ))}
        </div>

        <div className="btn-div">
          {currentQuestionIndex !== 0 && <button className="btn" onClick={goToPrevQuestion}>Previous</button>}
          
          {(questions.length === currentQuestionIndex + 1) ? (<button className="btn" onClick={handleSubmit}>Submit</button>) : (<button className="btn" onClick={goToNextQuestion}>Next</button>)}
        </div>

      </section>
    </>
  )
}
