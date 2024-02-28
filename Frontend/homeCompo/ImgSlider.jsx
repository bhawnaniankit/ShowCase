import { useState } from "react"
import "./ImgSlider.css"

export function ImgSlider() {
    const [slide, setSlide] = useState(1);

    return <>
        <div class="slider">
            <span id="slide-1"></span>
            <span id="slide-2"></span>
            <span id="slide-3"></span>
            <div class="image-container">
                <img src="../src/assets/mypost.jpg" class="slide" />
                <img src="../src/assets/slider3.jpg" class="slide" />
                <img src="../src/assets/slider1.jpg" class="slide" />
                <div className="test"><p><strong>Ankit Bhawnani</strong><br />
                    Developer of this application</p></div>
            </div>
            <div class="buttons">
                <a href="#slide-1" className="btn"></a>
                <a href="#slide-2" className="btn"></a>
                <a href="#slide-3" className="btn"></a>
            </div>
        </div>
    </>
}