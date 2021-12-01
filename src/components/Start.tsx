import React from "react";
import './Question.css';

type Props = {
    startGame: (e: React.MouseEvent<HTMLButtonElement>) => void;
    Score: number;
};

const Start: React.FC<Props> = ({
    startGame,
    Score
  }) => (
    <>
    <button className="start" onClick={startGame}>
      Start Game
     </button>
    <h3 className="score">Score: {Score} </h3>
    </>
  );

export default Start;
