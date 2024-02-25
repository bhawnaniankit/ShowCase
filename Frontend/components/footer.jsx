import './footrer.css'
import './utility.css'

export function Footer() {
    return <div className='container'>
        <div className="footerContainer">
            <div>
                <p className="left-app">
                    <strong className='white'>SHOWCASE</strong><br />
                </p>
                <img src="../src/assets/radio-round-svgrepo-com (2).svg" alt="app-;ogo" className='p50' />
            </div>
            <div className="left">
                <h3 className="heading">Services</h3>
                <ul className='white'>
                    <li>Sign Up</li>
                    <li>Log In</li>
                    <li>Share</li>
                </ul>
            </div>
            <div className="middle">
                <h3 className='heading'>Socials</h3>
                <ul>
                    <li><span >Instagram</span></li>
                    <li><span>Twitter</span></li>
                    <li><span>GitHub</span></li>
                    <li><span>LinkedIn</span></li>
                </ul>
            </div>
            <div className="right">
                <h3 className="heading">Contacts</h3>
                <ul>
                    <li>Tiruppur Palladam Rd, Karuppa Gaundanpalayam <br />
                        Tiruppur,641604,India
                    </li>
                    <li>Mobile <br />
                        +91-95736*****
                    </li>
                    <li>Email <br />
                        ShowCase@gmail.com
                    </li>

                </ul>
            </div>
        </div>

        <div className='credits-container'>
            <div>
                <pre className='credits'>
                    This is a demo project made using MERN Stack by <strong>Ankit Bhawnani</strong><br />
                    Contact for any work at <strong>bhawnaniankit@gmail.com</strong>
                </pre>
            </div>
        </div>
    </div>
}