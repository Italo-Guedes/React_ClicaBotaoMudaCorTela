import React, { useState } from "react";
import "./App.css";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? "selected" : ""}
        >
          {color}
        </button>
      ))}
    </div>
  );
}

export default App;



// function Button({ text = "Click Me!", color = "blue", fontSize = 12, handleClick }) {
//   const buttonStyle = {
//     color: color,
//     fontSize: fontSize + "px"
//   };

//   return (
//     <button onClick={() => handleClick('https://www.theodinproject.com')} style={buttonStyle}>
//       {text}
//     </button>
//   );
// }

// export default function App() {
//   const handleButtonClick = (url) => {
//     window.location.href = url;
//   };

//   return (
//     <div>
//       <Button handleClick={handleButtonClick} />
//     </div>
//   );
// }



// function Button({ text = "Click Me!", color = "blue", fontSize = 12, handleClick }) {
//   const buttonStyle = {
//     color: color,
//     fontSize: fontSize + "px"
//   };

//   return (
//     <button onClick={handleClick} style={buttonStyle}>
//       {text}
//     </button>
//   );
// }

// export default function App() {
//   const handleButtonClick = () => {
//     window.location.href = "http://www.google.com";
//   };

//   return (
//     <div>
//       <Button handleClick={handleButtonClick} />
//     </div>
//   );
// }



// function Button ({ text, color, fontSize }) {
//   const buttonStyle = {
//     color: color,
//     fontSize: fontSize + "px"
//   };

//   return <button style={buttonStyle}>{text}</button>
// }

// Button.defaultProps = {
//   text: "Click Me!",
//   color: "blue",
//   fontSize: 12
// };

// export default function App() {
//   return (
//     <div>
//       <Button />
//       <Button text="Don`t Click Me!" color="red" />
//       <Button fontSize={20} />
//     </div>
//   );
// }





// function Button(props) {

//   const buttonStyle = {
//     color: props.color,
//     fontSize: props.fontSize + 'px'
//   };

//   return (
//     <button style={buttonStyle}>{props.text}</button>
//   )
// }

// export default function App() {
//   return (
//     <div>
//       <Button text="Click Me!" color="blue" fontSize={12} />
//       <Button text="Don`t Click Me!" color="red" fontSize={12} />
//       <Button text="Click Me!" color="blue" fontSize={20} />
//     </div>
//   );
// }



// function Button({ text, color, fontSize }) {
//   const buttonStyle = {
//     color: color,
//     fontSize: fontSize + "px"
//   };

//   return <button style={buttonStyle}>{text}</button>;
// }

// export default function App() {
//   return (
//     <div>
//       <Button text="Click Me!" color="blue" fontSize={12} />
//       <Button text="Don't Click Me!" color="red" fontSize={12} />
//       <Button text="Click Me!" color="blue" fontSize={20} />
//     </div>
//   );
// }



// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App






