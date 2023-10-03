// import React, { useState } from 'react';
// import './App.css';
// import Lottie from 'react-lottie';
// import data from "./animation_lnacvjgd.json";

// function App() {

//   const [videoPosition, setVideoPosition] = useState({ top: 700, left: 500 });
//   const [currentPlayer, setCurrentPlayer] = useState('');

//   const handlePlayerChange = (playerName, position) => {
//     setCurrentPlayer(playerName);
//     setVideoPosition(position);
//   };

//   // const moveVideoTo = (position) => {
//   //   setVideoPosition(position);
//   // };
//   const defaultOptions = {
//     loop: true,
//     autoplay: true, 
//     animationData: data,
//     rendererSettings: {
//       preserveAspectRatio: 'xMidYMid slice'
//     }
//   };

//   return (
//     <div className="myApp">
//       <div className="App">
//       <div className="Players" >
//       <button className="Ronaldo" onClick={() => handlePlayerChange('Did you know Ronaldo has 60 Ballon d or', ({ top: 150, left: 525 }))}>Ronaldo</button>
//       <button className="Messi" onClick={() => handlePlayerChange('Did you know Messi has 500 world cup',({ top: 150, left: 635 }))}>Messi</button>
//       <button className="neymar" onClick={() => handlePlayerChange('Did you know Neymar has 50 Ballon d or',({ top: 150, left: 745 }))}>neymar</button>
//       <button className="Coasta" onClick={() => handlePlayerChange('Did you know Coasta is a Bus',({ top: 150, left: 855 }))}>Coasta</button>
//       <button className="Halland" onClick={() => handlePlayerChange('Did you know Halland has 2m Goals',({ top: 150, left: 965 }))} >Halland</button>
//       <button className="Mane" onClick={() => handlePlayerChange('Did you know Mane has the fastest Goal ?',({ top: 150, left: 1075 }))} >Mane</button>
//       </div>
      
//         <div
//           className="VideoContainer"
//           style={{ top: `${videoPosition.top}px`, left: `${videoPosition.left}px` }}
//         >
//           {/* <video className="assistant-video" autoPlay loop muted playsInline> */}
//             {/* <img className="image" src={Rona} alt='image' />
//             <p>hi</p> */}
//           {/* </video> */}
//           <div>
//             <Lottie options={defaultOptions}
//               height={80}
//               width={80} />
//               <p className='text'>{currentPlayer}</p>
//             </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default App;




import React, { useState, useEffect } from 'react';
import './App.css';
import Lottie from 'react-lottie';
import data from "./animation_lnacvjgd.json";

function App() {
  const [videoPosition, setVideoPosition] = useState({ top: 700, left: 500 });
  const [currentPlayer, setCurrentPlayer] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [typingSpeed, setTypingSpeed] = useState(50);

  const handlePlayerChange = (playerName, position) => {
    setCurrentPlayer(playerName);
    setVideoPosition(position);
  };

  useEffect(() => {
    let currentIndex = 0;
    const textToType = currentPlayer;

    const typingInterval = setInterval(() => {
      if (currentIndex < textToType.length) {
        setDisplayText(textToType.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentPlayer, typingSpeed]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: data,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="myApp">
      <div className="App">
        <div className="Players">
          <button className="Ronaldo" onClick={() => handlePlayerChange('Did you know Ronaldo has 60 Ballon d or', ({ top: 150, left: 525 }))}>Ronaldo</button>
          <button className="Messi" onClick={() => handlePlayerChange('Did you know Messi has 500 world cup', ({ top: 150, left: 635 }))}>Messi</button>
          <button className="neymar" onClick={() => handlePlayerChange('Did you know Neymar has 50 Ballon d or',({ top: 150, left: 745 }))}>neymar</button>
         <button className="Coasta" onClick={() => handlePlayerChange('Did you know Coasta is a Bus',({ top: 150, left: 855 }))}>Coasta</button>
         <button className="Halland" onClick={() => handlePlayerChange('Did you know Halland has 2m Goals',({ top: 150, left: 965 }))} >Halland</button>
         <button className="Mane" onClick={() => handlePlayerChange('Did you know Mane has the fastest Goal ?',({ top: 150, left: 1075 }))} >Mane</button>
        </div>

        <div
          className="VideoContainer"
          style={{ top: `${videoPosition.top}px`, left: `${videoPosition.left}px` }}
        >
          <div>
            <Lottie options={defaultOptions} height={80} width={80} />
            <p className='text'>{displayText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
