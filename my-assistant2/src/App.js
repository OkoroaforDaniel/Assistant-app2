import React, { useState } from 'react';
import Rona from "./Images/Ronaldo1.png"
import './App.css';

function App() {

  const [videoPosition, setVideoPosition] = useState({ top: 700, left: 500 });

  const moveVideoTo = (position) => {
    setVideoPosition(position);
  };

  return (
    <div className="myApp">
      <div className="App">
      <div className="Players" >
      <button className="Ronaldo" onClick={() => moveVideoTo({ top: 150, left: 500 })}>Ronaldo</button>
      <button className="Messi">Messi</button>
      <button className="neymar">neymar</button>
      <button className="Coasta" >Coasta</button>
      <button className="Halland" >Halland</button>
      <button className="Mane" >Mane</button>
      </div>
      
        <div
          className="VideoContainer"
          style={{ top: `${videoPosition.top}px`, left: `${videoPosition.left}px` }}
        >
          {/* <video className="assistant-video" autoPlay loop muted playsInline> */}
            {/* <img className="image" src={Rona} alt='image' />
            <p>hi</p> */}
          {/* </video> */}
        </div>

      </div>
    </div>
  );
}

export default App;
