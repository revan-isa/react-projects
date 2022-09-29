import React from "react";
import { useState, useEffect, useRef } from "react";

export const MaxCount = () => {
  const [click, setClick] = useState(0);
  const [time, setTime] = useState(10);
  const [startTimer, setStartTimer] = useState(false);
  let intervalId = useRef();

  useEffect(() => {
    if (time === 0) {
      clearInterval(intervalId.current);
      setStartTimer(false);
    }
  }, [time]);

  useEffect(() => {
    if (startTimer) {
      intervalId.current = setInterval(() => {
        setTime((prev) => (prev -= 1));
      }, 1000);
    } else {
      clearInterval(intervalId.current);
    }
  }, [startTimer]);

  const startAgain = () => {
    setStartTimer(true);
    setTime(10);
    setClick(0);
    document.querySelector(".plus").removeAttribute("disabled");
  };

  let x, y;

  if (time === 0) {
    y = <h3 className="my-3">{click}</h3>;
    x = document.querySelector(".plus").setAttribute("disabled", "true");
  } else {
    x = <h3 className="my-3">{click}</h3>;
  }

  return (
    <div className="container my-5">
      <h3>No of clicks untill timer expires</h3>
      <div className="row justify-content-center align-items-center">
        <div className="col-6">
          <div className="bg-warning d-flex flex-column justify-content-center align-items-center">
            {x}
            {y}
            <span>Time left: {time} seconds</span>
            <button
              className="btn btn-primary my-3 plus"
              onClick={() => setClick((prev) => prev + 1)}
            >
              +
            </button>
            {time > 0 ? (
              <button
                className="btn btn-danger my-3 "
                onClick={() => setStartTimer(true)}
              >
                Start
              </button>
            ) : (
              <button className="btn btn-danger my-3" onClick={startAgain}>
                Restart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
