import React, { useEffect, useState } from "react";

const Pomodoro = () => {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(25);
  const [isRunning, setIsRunning] = useState(false);
  const [work, setWork] = useState(0);

  var timer;

  useEffect(() => {
    if (isRunning) {
      timer = setInterval(() => {
        if (sec === 0) {
          setMin((prevMin) => prevMin - 1);
          setSec(59);
        } else setSec((prevSec) => prevSec - 1);

        if (min === 0 && sec === 0 && work === 0) {
          setMin(5);
          setSec(0);
          setWork(1);
        } else if (min === 0 && sec === 0 && work === 1) {
          setMin(25);
          setSec(0);
          setWork(0);
          setIsRunning(false);
        }
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning, min, sec]);

  const start = () => {
    setIsRunning(true);
  };

  const pause = () => {
    setIsRunning(false);
    clearInterval(timer);
  };

  const reset = () => {
    setIsRunning(false);
    setMin(25);
    setSec(0);
    setWork(0);
  };

  return (
    <div className="pomodoro-container">
      <h1>POMODORO</h1>
      <div className="info-container">
        <h2 className="work">{work === 1 ? "Break" : "Work"}</h2>
        <p>
          {min < 10 ? "0" + min : min}:{sec < 10 ? "0" + sec : sec}
        </p>
      </div>
      <div className="button-container">
        <button className="start-button" onClick={start}>
          Start
        </button>
        <button className="pause-button" onClick={pause}>
          Pause
        </button>
        <button className="reset-button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Pomodoro;
