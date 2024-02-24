import "./sign.css"
import { useState } from "react"
import axios from 'axios'

export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password1, setPassword1] = useState("");

    return <div className="SignUp">
        <h2>Sign Up</h2>
        <p>Welcome to the most Awesome Website</p>
        <input type="text" placeholder="Name" className="signup-input" onChange={(e) => {
            setName(e.target.value);
        }} />
        <input type="text" placeholder="Email" className="signup-input" onChange={(e) => { setEmail(e.target.value) }} />
        <input type="password" placeholder="Password" className="signup-input" onChange={(e) => { setPassword(e.target.value) }} />
        <input type="password" placeholder="Confirm Passwword" className="signup-input" onChange={(e) => { setPassword1(e.target.value) }} />
        <p className="alert">{password == password1 ? "" : "Password Does'nt Match"}</p>
        <div className="btn-div">
            <button className="signup-btn" onClick={async () => {
                const res = await axios.post("http://localhost:3000/sign-up", { name: name, email: email, password: password }, {
                    withCredentials: true
                });
                console.log(res);
                alert("Sign Up Success Fully")
            }}>Sign Up</button>
        </div>
    </div>
}
