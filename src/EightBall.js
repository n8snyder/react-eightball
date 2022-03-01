import { useState } from "react";

import './EightBall.css';

function EightBall({ answers }) {

  const [color, setColor] = useState("black");
  const [message, setMessage] = useState("Think of a Question.");

  return (
    <div className="EightBall">
      <span className="EightBall-dot">

      </span>
    </div>
  );
}

export default EightBall;