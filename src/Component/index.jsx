import React, { useEffect } from 'react';
import { gsap } from 'gsap'

function Component(props) {
    useEffect(() => {
        const timeLine = gsap.timeline()
        timeLine.from(".welcome", { x: "-50%", scale: 0, opacity: 0, rotation: 360, duration: 1 })
            .from(".info", { x: "50%", scale: 0, opacity: 0, rotation: 360, duration: 0.5 })

    }, [])
    return (
        <div className="test" style={{ textAlign: "center" }}>
            <p className="welcome " style={{ fontSize: "40px", marginTop: "30px", marginBottom: "30px" }}>Hello Project</p>
            <p className="info" style={{ color: "blue" ,fontSize: "30px"}}>Diệp Vĩnh Kiên</p>
        </div>
    );
}

export default Component;