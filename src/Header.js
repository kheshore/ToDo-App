import React from 'react'

const Header = (props) => {
    //props -> property of the Header
  return (
    <header>
       <h1>{props.title}</h1>
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