
interface Question {
    id: Number,
    question: String,
    options: String[],
    answer: String,
    userSelectedAnswer?: String
  }

interface Props {
    score: number,
    questions: Question[]
}

export default function ShowAnswer({score, questions} : Props) {
  return (
    <div>
        <h2 className="showScore">You scored {score} out of {questions.length}!</h2>

        <section className="question-section">

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
      </div>
  )
}
