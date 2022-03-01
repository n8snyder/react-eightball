import { useState } from "react";

import './EightBall.css';

function EightBall({ answers }) {

  const [color, setColor] = useState("black");
  const [message, setMessage] = useState("Think of a Question.");

  const eightBallStyles = {"background-color": color}

  return (
    <div className="EightBall">
      <span className="EightBall-dot" style={eightBallStyles}>
        <div className="EightBall-message">
          {message}
        </div>
      </span>
    </div>
  );
}

export default EightBall;