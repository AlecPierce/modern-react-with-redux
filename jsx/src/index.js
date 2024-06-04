// 1) Import the react and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";

// 2) Get a reference to the div with ID 'root' in index.html
const el = document.getElementById("root");

// 3) Tell react to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a react component
const App = () => {
  const message = "whats up";
  const response = "chillin";

  return (
    <div>
      {message}? Not much, {message} with you!? Ah you know, just {response}
    </div>
  );
};

// 5) Show the react component on the screen
root.render(<App />);
