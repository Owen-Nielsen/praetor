import React, { useState } from 'react';
import './App.css';

function App() {
  const [month, setMonth] = useState(0);
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const gridItems = Array(42).fill().map((_, index) => <div key={index} className="grid-item">Day {index + 1}</div>);

  const nextMonth = () => setMonth(month + 1);
  const prevMonth = () => setMonth(month - 1);

  return (
    <div className="App">
      <button onClick={prevMonth}>Previous Month</button>
      <button onClick={nextMonth}>Next Month</button>
      <div className="grid-container">
        {daysOfWeek.map((day, index) => <div key={index} className="grid-item">{day}</div>)}
        {gridItems}
      </div>
    </div>
  );
}

export default App;