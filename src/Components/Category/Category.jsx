/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Category.css'
const Category = ({dropdown}) => {
  return (
    <>
      <div className="category" onClick={dropdown}>
                <div className="storeicon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 3V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H11ZM21 13V20C21 20.5523 20.5523 21 20 21H13V13H21ZM20 3C20.5523 3 21 3.44772 21 4V11H13V3H20Z"></path></svg>
                </div>
                <div className="categorytext">Categories</div>
                <div className="storeicon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg>
                </div>
              </div>
    </>
  )
}

export default Category
