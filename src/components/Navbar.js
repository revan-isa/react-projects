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
            <Link className="link" to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to={"/todo"}>
              To-Do
            </Link>
          </li>
          <li>
            <Link className="link" to={"/about"}>
              About
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