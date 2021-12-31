import React, { useState } from "react";

function App() {
  setInterval(getTime, 1000);
  const now = new Date().toLocaleTimeString();
  console.log(time);

  var [time, newTime] = useState(now);

  function getTime() {
    const currentTime = new Date().toLocaleTimeString();
    newTime(currentTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
