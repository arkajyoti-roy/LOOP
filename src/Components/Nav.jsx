/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Top.css";
import { NavLink } from "react-router-dom";

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
              <span className="material-symbols-outlined">collections_bookmark</span>
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
           <NavLink to="/compiler" > Compiler</NavLink>
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
              <span className="material-symbols-outlined">sentiment_satisfied</span>
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



      <div className='top-nav'>
      <img className="nav-logo" src="../../public/img/logo.jpg" alt="logo"/>
        <div className='search'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.8675 18 18 14.8675 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18ZM19.4853 18.0711L22.3137 20.8995L20.8995 22.3137L18.0711 19.4853L19.4853 18.0711Z"></path></svg>
          <input type="text" placeholder='Type here to search'/>
        </div>
      </div>
      </div>
    </>
  );
};

export default Nav;
