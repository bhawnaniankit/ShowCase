import "./sideGrid.css"

export function SideGrid() {
    return <>
        <div className="gridContainer">
            <div className="left">
                <div className="post">
                    <div className="postimgcontainer">
                        <img src="../src/assets/grid4.png" className="postimg" alt="" />
                    </div>
                    <div className="caption">
                        <p><strong>bhawnani_21</strong></p>
                        <p>Hi there this is <strong>Ankit Bhawnani</strong> the developer <br />of this application. This Section is for posts. <br /> Suggested by the backend according to the user's <br /> perfered genre.</p>
                    </div>
                </div>
                <div className="post">
                    <div className="postimgcontainer">
                        <img src="../src/assets/grid1.webp" className="postimg" alt="" />
                    </div>
                    <div className="caption">
                        <p><strong>bhawnani_21</strong></p>
                        <p>Hi there this is <strong>Ankit Bhawnani</strong> the developer <br />of this application. This Section is for posts. <br /> Suggested by the backend according to the user's <br /> perfered genre.</p>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="post">
                    <div className="postimgcontainer">
                        <img src="../src/assets/grid2.webp" className="postimg" alt="" />
                    </div>
                    <div className="caption">
                        <p><strong>bhawnani_21</strong></p>
                        <p>Hi there this is <strong>Ankit Bhawnani</strong> the developer <br />of this application. This Section is for posts. <br /> Suggested by the backend according to the user's <br /> perfered genre.</p>
                    </div>
                </div>
                <div className="post">
                    <div className="postimgcontainer">
                        <img src="../src/assets/grid3.webp" className="postimg" alt="" />
                    </div>
                    <div className="caption">
                        <p><strong>bhawnani_21</strong></p>
                        <p>Hi there this is <strong>Ankit Bhawnani</strong> the developer <br />of this application. This Section is for posts. <br /> Suggested by the backend according to the user's <br /> perfered genre.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}