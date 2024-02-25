import './footrer.css'
import './utility.css'

export function Footer() {
    return <div className='container'>
        <div className="footerContainer">
            <strong className='left-app'>SHOWCASE</strong>
            <div className="left">
                <p className="heading underline">Services</p>
                <ul className='white'>
                    <li>Sign Up</li>
                    <li>Log In</li>
                    <li>Share</li>
                </ul>
            </div>
            <div className="middle">
                <p className='underline'>Socials</p>
                <ul>
                    <li><span >Instagram</span></li>
                    <li><span>Twitter</span></li>
                    <li><span>GitHub</span></li>
                    <li><span>LinkedIn</span></li>
                </ul>
            </div>
            <div className="right">
                {/* <img src="../src/assets/radio-round-svgrepo-com (2).svg" alt="img logo" className="logo" /> */}
                <p>right</p>
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