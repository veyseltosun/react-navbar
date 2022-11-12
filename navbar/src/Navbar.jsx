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
                   {links.map((link)=>{
                    const{id, text, url} = link;
                    return(
                        <li key={id}>
                            <a href={url}>{text}</a>
                        </li>
                    )
                   })}
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