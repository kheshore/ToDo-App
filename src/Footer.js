import React from 'react'
import { FaListUl } from "react-icons/fa";


const Footer = ({count}) => {
  return (
   <footer>
    <FaListUl 
    style={{marginRight: "5px", fontSize: "18px"}}
    />
    <p>List count: {count}</p>
   </footer>
  )
}

export default Footer