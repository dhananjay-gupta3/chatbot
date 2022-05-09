import React, { useState } from 'react'
import {  NavLink,  useNavigate } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    const [active,setActive] =useState("list");
    const [toggle,setToggle] = useState("nav_toggle")

    const nevigate = useNavigate();
    const navtoggle = () =>{
        active === "list"
        ? setActive("list nav__active")
        : setActive("list")

        toggle === "nav_toggle" 
        ? setToggle("nav_toggle toggle")
        : setToggle("nav_toggle")
    };
    return (
        <div className='main'>
            <div className='nav'>

                <div className='img'>
                    <img to='/'
                    onClick={()=>nevigate('/')}
                    src='https://www.chatbot.com/chatbot-logo.svg' alt='/home' />
                </div>
                <ul className={active}>

                    <li><NavLink className='navlink' to='/product'>product</NavLink></li>
                    <li><NavLink className='navlink' to='/pricing'>Pricing</NavLink></li>
                    <li><NavLink className='navlink' to='/intergration'>intergration</NavLink></li>
                    <li><NavLink className='navlink' to='/resources'>Resources</NavLink></li>
                    <div className='btn'>
                        <button 
                        onClick={()=>nevigate('/login')}
                        className='btns'>Log in</button>
                        <button 
                        onClick={()=>nevigate('/signup')}
                        className='btnes'>Sign up free</button>
                    </div>
                </ul>
                <div onClick={navtoggle} className={toggle}>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>
                    <div className='line4'></div>
                </div>


                <div >

                </div>








            </div>
        </div>
    )
}

export default Navbar