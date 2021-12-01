import React from "react";
import './Question.css';

type Props = {
  question: string;
  answers: string[];
  correctAns: number;
  questionNum: number;
  totalQuestions: number;
  userAnswer: number;
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
};


const Question: React.FC<Props> = ({
  question,
  questionNum,
  totalQuestions,
  correctAns,
  answers,
  userAnswer,
  callback,
}) => (
  <div className='question'>
    <p className="number">
      Question: {questionNum} / {totalQuestions}
    </p>
    <p>{question}</p>
    {
    answers.map((answer, index) => (
    <div key={index}>
      <button className="answer" value={index} onClick={callback}>{answer}</button>
    </div>
    ))}
  </div>
);

export default Question;
