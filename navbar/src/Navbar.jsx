import React from 'react'
import {useEffect, useState, useRef} from "react";
import{FaBars, FaFacebook, FaLinkedin, FaTwitter} from "react-icons/fa";
import {links, social} from "./Data";
import logo from "./logo.svg"

function Navbar() {
    const[showLinks, setShowLinks] = useState(false)
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);

    useEffect( () => {
       const linksHeight = linksRef.current.getBoundingClientRect().height 
       if(showLinks){
        linksContainerRef.current.style.height = `${linksHeight}px`
       }else{
        linksContainerRef.current.style.height = "0px"
       }

    },[showLinks])
  return (
    <nav>
        <div className='nav-center'>
            <div className='nav-header'>
                <img src={logo} alt="logo"></img>
                <h4>Veysel's Navbar &copy;</h4>
                <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)}><FaBars/></button>


            </div>
            

            <div className="links-container" ref={linksContainerRef}>
                <ul className='links' ref={linksRef}>
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
                {social.map((item)=>{
                    const{id, url,icon} = item;
                    return(
                        <li key={id}>
                            <a href={url}>{icon}</a>
                        </li>
                    )
                })}
               
            </ul>
                
        </div>
    </nav>
  )
}

export default Navbar