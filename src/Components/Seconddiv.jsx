/* eslint-disable no-unused-vars */
import React from "react";
import "./Top.css";
import { NavLink } from "react-router-dom";

const Seconddiv = () => {
  return (
    <>
      <div className="seconddiv">
        <div className="second">
          <h3>Courses</h3>
    <NavLink to="/sec1">
            
            <button>🡢</button>
            </NavLink>
        </div>
        <div className="second">
          <h3>AI Tools</h3>
          <NavLink to="/sec2">
            <button>🡢</button>
            </NavLink>
        </div>
      </div>
    </>
  );
};

export default Seconddiv;
