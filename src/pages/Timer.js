import React from "react";
import { useState, useEffect, useRef } from "react";

export const Timer = () => {
  const [time, setTime] = useState(0);
  const [min, setMin] = useState(0);

  const [startTimer, setStartTimer] = useState(false);
  let intervalId = useRef();

  useEffect(() => {
    if (startTimer) {
      intervalId.current = setInterval(() => {
        setTime((prev) => (prev += 1));
      }, 1000);
      document.querySelector(".start").setAttribute("disabled", "true");
      document.querySelector(".stop").removeAttribute("disabled");
    } else {
      clearInterval(intervalId.current);
      document.querySelector(".stop").setAttribute("disabled", "true");
      document.querySelector(".start").removeAttribute("disabled");
    }
  }, [startTimer]);

  const reset = () => {
    setTime(0);
    setMin(0);
    setStartTimer(false);
    clearInterval(intervalId.current);
    document.querySelector(".start").removeAttribute("disabled");
    document.querySelector(".stop").removeAttribute("disabled");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center flex-column mt-5">
      <h1>Timer</h1>
      <div className="d-flex justify-content-center my-3">
        <span>
          {" "}
          Mins:{min} {time > 59 ? setMin((prev) => prev + 1) : null}
        </span>{" "}
        &nbsp;{" "}
        <span>
          {" "}
          Secs: {time < 10 ? `0${time}` : time} {time > 59 ? setTime(0) : null}{" "}
        </span>
      </div>

      <div className="btn-group">
        <button
          className="btn btn-primary start"
          onClick={() => setStartTimer(true)}
        >
          Start
        </button>
        <button
          className="btn btn-danger mx-1 stop"
          onClick={() => setStartTimer(false)}
        >
          Stop
        </button>
        <button className="btn btn-warning" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};
