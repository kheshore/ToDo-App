import React from 'react'
import { FaBook } from "react-icons/fa";

const Header = (props) => {
    //props -> property of the Header
  return (
    <header>
      <FaBook 
      style={{fontSize: "25px", marginRight: "10px"}}
      />
       <h1>{props.title}</h1>
       <p style={{margin: "21.440px"}}><br/>By Kheshore J R</p>
    </header>
    // value of the title is fetch from parent (if decleared)
    // Or default value is obtained 
  )
}
//sets default value to the property
Header.defaultProps = {
    title: "To-Do List"
}

export default Header