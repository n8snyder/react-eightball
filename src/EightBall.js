import { useState } from "react";

import './EightBall.css';
import defaultAnswers from './EightBallAnswers';

// TODO: non component files should not be uppercase, only components should
// TODO: Could move defaultAnswers to this file and export.

/** Magic eight ball game
 * 
 * Props:
 * - answers: [{ msg: "It is certain.", color: "green" }, ...]
 * 
 * State:
 * - color
 * - message
 * 
 * App -> EightBall
 */

function EightBall({ answers = { defaultAnswers } }) {

  const [color, setColor] = useState("black");
  const [message, setMessage] = useState("Think of a Question.");

  /** handlePickAnswer: Picks random answer and updates color and message */
  function handlePickAnswer() {
    const randomIdx = Math.floor(Math.random() * answers.length);
    const answer = answers[randomIdx];
    setColor(answer.color);
    setMessage(answer.msg);
  }

  const eightBallStyles = { backgroundColor: color }
  return (
    <div className="EightBall">
      <span className="EightBall-dot" style={eightBallStyles} onClick={handlePickAnswer}>
        <div className="EightBall-message">
          {message}
        </div>
      </span>
    </div>
  );
}

export default EightBall;