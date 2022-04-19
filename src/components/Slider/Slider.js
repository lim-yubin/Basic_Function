import { useState } from "react"
import "./Slider.css"


export default function Slider() {
    const [slideVal, setSlideVal] = useState(0)

    const onChange = (e) => {
        setSlideVal(e.target.value)

    }
    const onClick = (e) => {
        setSlideVal(e.target.value)
    }

    return (
        <>
            <div id="slide-wrap">
                <div id="slide-container">
                    <div id="count-container">
                        <input type="text" id="count" value={slideVal} onChange={onChange} />
                        <span>%</span>
                    </div>
                    <input type="range" id="slider" value={slideVal} min="0" max="100" step="1" onChange={onChange} />
                    <div id="btn-container">
                        <button className="slide-btn" onClick={onClick} value="0">0%</button>
                        <button className="slide-btn" onClick={onClick} value="25">25%</button>
                        <button className="slide-btn" onClick={onClick} value="50">50%</button>
                        <button className="slide-btn" onClick={onClick} value="75">75%</button>
                        <button className="slide-btn" onClick={onClick} value="100">100%</button>
                    </div>
                </div>
            </div>
        </>
    )
}