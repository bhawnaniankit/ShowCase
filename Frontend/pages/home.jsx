import { SideGrid } from "../homeCompo/sideGrid";
import { ImgSlider } from "../homeCompo/ImgSlider";
import "./home.css"

export function Home() {
    return <>
        <div className="container">
            <ImgSlider></ImgSlider>
            <SideGrid></SideGrid>
        </div>
    </>
}