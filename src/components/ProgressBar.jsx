import React from 'react';

function ProgressBar({ current, total }) {
  const percentage = (current / total) * 100;

  return (
    <div style={{ display: "flex" ,gap :"10px", marginBottom:"10px" }}>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${percentage}%` }}></div>
      </div>
      <span>{current} / {total} attended</span>
    </div>
  );
}

export default ProgressBar;
