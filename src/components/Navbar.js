import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const [isActive, setisActive] = useState(false);

  const handleClick = () => {
    setisActive(!isActive);
  };
  return (
    <>
      <nav>
        <h5>revan_isa</h5>
        <ul className={isActive ? "open" : undefined}>
          <li>
            <Link className="link" to={"/employeelist"}>
              Employee List
            </Link>
          </li>
          <li>
            <Link className="link" to={"/todo"}>
              To-Do
            </Link>
          </li>
          <li>
            <Link className="link" to={"/timer"}>
              Timer
            </Link>
          </li>{" "}
          <li>
            <Link className="link" to={"/maxcount"}>
              Max Count
            </Link>
          </li>
          <li>
            <Link className="link" to={"/progressbar"}>
              Progress Bar
            </Link>
          </li>
        </ul>
        <div
          className={`hamburger ${isActive ? "animate" : undefined}`}
          onClick={handleClick}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
    </>
  );
};
