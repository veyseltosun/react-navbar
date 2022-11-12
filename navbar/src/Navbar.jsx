import React from 'react'
import {useEffect, useState, useRef} from "react";
import{FaBars} from "react-icons/fa";
import {links, social} from "./Data";
import logo from "./logo.svg"

function Navbar() {
  return (
    <nav>
        <div className='nav-center'>
            <div className='nav-header'>
                <img src={logo} alt="logo"></img>
                <button className="nav-toggle"><FaBars></FaBars></button>


            </div>
            <div className='links-container show-container'>
                <ul className='links'>
                    <li>
                        <a href='#'>home</a>
                    </li>
                    <li>
                        <a href='#'>about</a>
                    </li>
                    <li>
                        <a href='#'>contact</a>
                    </li>
                    <li>
                        <a href='#'>products</a>
                    </li>
                </ul>
            </div>
            <ul className='social-icons'></ul>
        </div>
    </nav>
  )
}

export default Navbar