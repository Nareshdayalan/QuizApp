import React, { useState } from 'react';


const categories = [
  { id: 9, name: 'General Knowledge' },
  { id: 18, name: 'Computer Science' },
  { id: 23, name: 'History' },
];

const difficulties = ['easy', 'medium', 'hard'];

const QuizSettings = ({ onStartQuiz }) => {
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [error, setError] = useState('');

  const handleStart = () => {
    if (!category || !difficulty) {
      setError('Please select both category and difficulty.');
      return;
    }
    setError('');
    onStartQuiz(category, difficulty);
  };

  return (
    <div className="quiz-settings-container">
      <h2 className="quiz-title">Quiz Setup</h2>
      <p className="quiz-subtitle">Choose your category and difficulty to begin!</p>

      {error && <p className="quiz-error">{error}</p>}

      <div className="form-group">
        <label>Select Category</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">-- Choose a Category --</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Select Difficulty</label>
        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          <option value="">-- Choose Difficulty --</option>
          {difficulties.map((diff) => (
            <option key={diff} value={diff}>
              {diff.charAt(0).toUpperCase() + diff.slice(1)}
            </option>
          ))}
        </select>
      </div>
      <div className='button-style'>
         <button className="start-btn" onClick={handleStart}>
              Start Quiz
          </button>
      </div>
     
    
    </div>
  );
};

export default QuizSettings;
