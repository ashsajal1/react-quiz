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

export default function Multiple() {

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
    const [doShowScore, setDoShowScore] = useState<Boolean>(false)
    const [doShowAnswers, setDoShowAnswers] = useState<Boolean>(false)

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
            <div className="multiple-questions">
                <section className="question-section">
                    {questions.map((question, index) => (
                        <div className="question question-bg" key={index}>
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
                </section>
                <div className="mulitple-btn-div">
                    <button className="mulitple-div-btn" onClick={handleSubmit}>Submit Quiz</button>
                </div>
            </div>
        </>
    )
}
