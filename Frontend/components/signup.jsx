import "./sign.css"
import { useState } from "react"

export function SignUp() {
    const [pass1, setPass1] = useState("dd");
    const [pass2, setPass2] = useState("");
    return <div className="SignUp">
        <h2>Sign Up</h2>
        <p>Welcome to the most Awesome Website</p>
        <input type="text" placeholder="Name" className="signup-input" />
        <input type="text" placeholder="Email" className="signup-input" />
        <input type="password" placeholder="Password" className="signup-input" />
        <input type="password" placeholder="Confirm Passwword" className="signup-input" />
        <p>{pass1 == pass1 ? "" : "Password does'nt Match"}</p>
        <div className="btn-div">
            <button className="signup-btn">Sign Up</button>
        </div>
    </div>
}