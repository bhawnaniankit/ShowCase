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
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa possimus quia dolores, vel accusamus ea ad repellendus officiis ab assumenda odit quibusdam voluptate voluptatum doloremque libero impedit dolor reiciendis cumque.</p>
                    </div>
                </div>
                <div className="post">
                    <div className="postimgcontainer">
                        <img src="../src/assets/grid1.webp" className="postimg" alt="" />
                    </div>
                    <div className="caption">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa possimus quia dolores, vel accusamus ea ad repellendus officiis ab assumenda odit quibusdam voluptate voluptatum doloremque libero impedit dolor reiciendis cumque.</p>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="post">
                    <div className="postimgcontainer">
                        <img src="../src/assets/grid2.webp" className="postimg" alt="" />
                    </div>
                    <div className="caption">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa possimus quia dolores, vel accusamus ea ad repellendus officiis ab assumenda odit quibusdam voluptate voluptatum doloremque libero impedit dolor reiciendis cumque.</p>
                    </div>
                </div>
                <div className="post">
                    <div className="postimgcontainer">
                        <img src="../src/assets/grid3.webp" className="postimg" alt="" />
                    </div>
                    <div className="caption">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa possimus quia dolores, vel accusamus ea ad repellendus officiis ab assumenda odit quibusdam voluptate voluptatum doloremque libero impedit dolor reiciendis cumque.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}