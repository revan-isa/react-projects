import React from "react";
import { useState } from "react";

export const ProgressBar = () => {
  const [val, setVal] = useState(20);

  return (
    <div className="container">
      <h1 className="my-4">Progress bar</h1>
      <div className="row justify-content-center align-items-center">
        <div className="col-2">
          {" "}
          <label for="html">Input Percentage:</label>
          <input
            className="form-control my-3"
            type="number"
            onChange={(e) => setVal(e.target.value)}
            min="0"
            max="100"
          />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-4">
          {" "}
          <div className="progress my-3">
            <div className="progress-bar" style={{ width: `${val}%` }}>
              {val}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
