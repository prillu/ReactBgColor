import React, { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('#ffffff'); // Initial color state

  // Function to handle color change
  const handleChangeColor = (newColor) => {
    setColor(newColor); // Sets the new color
  };

  return (
    <>
        <div className="Head" style={{backgroundColor: color}}>
          <h1>Background Color Change</h1>
          </div>
          <div className="App" style={{backgroundColor: color }}>
          <button onClick={() => handleChangeColor('#ff0000')}>Red</button>
          <button onClick={() => handleChangeColor('#00ff00')}>Green</button>
          <button onClick={() => handleChangeColor('#0000ff')}>Blue</button>
          <button onClick={() => handleChangeColor('#ffff00')}>Yellow</button>
          <button onClick={() => handleChangeColor('#ff00ff')}>Magenta</button>
          <button onClick={() => handleChangeColor('#00ffff')}>Cyan</button>
          <button onClick={() => handleChangeColor('#ffffff')}>White</button>
        </div>
      
    </>
     );
}

export default App;