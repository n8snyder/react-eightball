import './App.css';
import EightBall from './EightBall';
import defaultAnswers from './EightBallAnswers';

/** App: root component
 * 
 * App -> EightBall
 */

function App() {
  return (
    <EightBall answers={defaultAnswers} />
  );
}

export default App;
