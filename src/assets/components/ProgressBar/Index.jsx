import React, { useState } from 'react';
import "./index.css"

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  const handleIncrease = () => {
    if (progress < 100) {
      setProgress(progress + 10);
    }
  };

  const handleDecrease = () => {
    if (progress > 0) {
      setProgress(progress - 10);
    }
  };

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}>
        
      </div>{progress}%
      <div className="buttons">
        <button onClick={handleIncrease} className="increase-button">Increase</button>
        <button onClick={handleDecrease} className="decrease-button">Decrease</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <ProgressBar />
    </div>
  );
}

export default App;