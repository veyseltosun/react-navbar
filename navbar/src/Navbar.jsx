import React from 'react'
import {useEffect, useState, useRef} from "react";
import{FaBars, FaFacebook, FaLinkedin, FaTwitter} from "react-icons/fa";
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
            <ul className='social-icons'>
                <li>
                    <a href='https://twitter.com'>
                        <FaTwitter/>
                    </a>
                </li>
            </ul>
                <li>
                    <a href='https://twitter.com'>
                        <FaLinkedin/>
                    </a>
                </li>
            </ul>
                <li>
                    <a href='https://twitter.com'>
                        <FaFacebook/>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar