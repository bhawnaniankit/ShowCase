import './header.css'
import { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
    const [profile_url, setUrl] = useState("../src/assets/profile.png");

    return <>
        <div className="header-container">

            <div className="navBar">
                <img src="../src/assets/radio-round-svgrepo-com (2).svg" alt="logo" className="app-Logo" />
                <ul className='flex navlist'>
                    <li><Link className='nav' to='/home' >Home</Link></li>
                    <li><Link className='nav' to='/' >Sign Up</Link></li>
                    <li><Link className='nav' to='/log-in'>Log In</Link></li>
                    <li><Link className='nav' to='/ContactUs'>Contact Us</Link></li>
                </ul>
            </div>
            <div >
                <img className="profile" src={profile_url} alt="profile" />
            </div>
        </div>
    </>
}