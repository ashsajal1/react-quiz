interface ShowScoreProps {
    score: number;
    questionLength: number;
    handleShowAnswer: () => void;
  }
  
  export default function ShowScore({ score, questionLength, handleShowAnswer }: ShowScoreProps) {
    return (
      <section className="showScore">
        <h2>You scored {score} out of {questionLength}!</h2>
        <button onClick={handleShowAnswer}>Check Answers</button>
      </section>
    );
  }