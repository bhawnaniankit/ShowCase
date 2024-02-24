import './header.css'
import { useState } from "react";
// import { Link } from "react-router-dom";

export function Header() {
    const [profile_url, setUrl] = useState("../src/assets/profile.png");

    return <>
        <div className="header-container">
            <div>
                <img src="../src/assets/radio-round-svgrepo-com (2).svg" alt="logo" className="app-Logo" />
            </div>
            <div className="navBar">
                <div><a className='nav' >Home</a></div>
                <div><a className='nav'>Sign Up</a></div>
                <div><a className='nav'>Log In</a></div>
            </div>
            <div >
                <img className="profile" src={profile_url} alt="profile" />
            </div>
        </div>
    </>
}