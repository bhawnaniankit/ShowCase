import './header.css'
import { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
    const [profile_url, setUrl] = useState("../src/assets/profile.png");

    return <>
        <div className="header-container">
            <div>
                <img src="../src/assets/radio-round-svgrepo-com (2).svg" alt="logo" className="app-Logo" />
            </div>
            <div className="navBar">
                <div><Link className='nav' to='/' >Home</Link></div>
                <div><Link className='nav' to='/' >Sign Up</Link></div>
                <div><Link className='nav' to='/log-in'>Log In</Link></div>
            </div>
            <div >
                <img className="profile" src={profile_url} alt="profile" />
            </div>
        </div>
    </>
}