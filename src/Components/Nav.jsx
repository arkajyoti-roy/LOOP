/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Top.css";
import { NavLink } from "react-router-dom";
import Category from "./Category/Category";
import Categorysection from "./Categorydiv/Category";

const Nav = () => {
  const [slider, setslider] = useState(true);
  const sliderfunction = () => {
    setslider((item) => !item);
  };

  return (
    <>
      <div className="nav">
        <aside className="sidebar">
          {/* <div className="logo">
            <img src="../img/logo.jpg" alt="logo" />
            <h2>LOOP</h2>
          </div> */}
          <ul className="links">
            <h4>Main Menu</h4>
            <li>
              <span className="material-symbols-outlined">house</span>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <span className="material-symbols-outlined">
                collections_bookmark
              </span>
              <NavLink to="/material">Materials</NavLink>
            </li>
            <li>
              <span className="material-symbols-outlined">account_tree</span>
              <NavLink to="/courses">Courses</NavLink>
            </li>
            <hr />
            <h4>Advanced</h4>
            <li>
              <span className="material-symbols-outlined">terminal</span>
              <NavLink to="/compiler"> Compiler</NavLink>
            </li>
            <li>
              <span className="material-symbols-outlined">edit_square</span>
              <NavLink to="/testskills">Test Skills</NavLink>
            </li>
            <li>
              <span className="material-symbols-outlined">subscriptions</span>
              <NavLink to="/subscription">Subscription</NavLink>
            </li>
            <li>
              <span className="material-symbols-outlined">update</span>
              <NavLink to="/updates">Updates</NavLink>
            </li>
            <li>
              <span className="material-symbols-outlined">
                sentiment_satisfied
              </span>
              <NavLink to="/feedback">Feedback</NavLink>
            </li>
            <hr />
            <h4>Account</h4>
            <li>
              <span className="material-symbols-outlined">bar_chart</span>
              <NavLink to="/overview">Overview</NavLink>
            </li>
            <li>
              <span className="material-symbols-outlined">mail</span>
              <NavLink to="/notifications">Notifications</NavLink>
            </li>
            <li>
              <span className="material-symbols-outlined">settings</span>
              <NavLink to="/settings">Settings</NavLink>
            </li>
            {/* <li className="logout-link">
              <span className="material-symbols-outlined">logout</span>
              <a href="#">Logout</a>
            </li> */}
          </ul>
        </aside>

        <div className="top-nav">
          <img
            className="nav-logo"
            src="../../public/img/logo.jpg"
            alt="logo"
          />

          <div className="group">
            <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
            <input placeholder="Search" type="search" className="input" />
            <Category dropdown={sliderfunction} />
          </div>
          {slider === false ? (
            <Categorysection/>
          ) : (
            <div className="CategorysectionDisable"></div>
          )}
        </div>
      </div>
    </>
  );
};

export default Nav;
