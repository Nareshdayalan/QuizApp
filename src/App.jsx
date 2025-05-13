import { useState } from 'react';
import QuizContainer from './components/QuizContainer';
import quiz from "../src/logo.png";
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <h1 style={{ margin: 0, fontSize: "32px", color: " #green" }}>THINKSPRINT</h1>
        </div>
      </div>
      
     
      
      <QuizContainer />
    </div>
  );
}

export default App;
