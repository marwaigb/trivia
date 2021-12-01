import React from "react";
import './Question.css';


type Props = {
    next: (e: React.MouseEvent<HTMLButtonElement>) => void;
    prev: (e: React.MouseEvent<HTMLButtonElement>) => void;
    end: (e: React.MouseEvent<HTMLButtonElement>) => void;
}


const Prev: React.FC<Props> = ({
    prev
  }) => (
            <button className="prev" onClick={prev}>
              Previous Question
            </button>

    );



const Next: React.FC<Props> = ({
        next,

    }) => (
            
        <button className="next" onClick={next}>
        Next Question
      </button>
    
    );

const End: React.FC<Props> = ({
        end,
    }) => (
            
        <button className="end" onClick={end}>
         End 
        </button>
    
    );


  export default {End,Prev,Next};