
import { useState } from "react"
import "./Tab.css"

export default function Tab() {
    const [tabState, setTabState] = useState("potato")

    const onClick = (e) => {
        let value = e.target.value
        let x = 0
        const line = document.getElementById("under-line")
        setTabState(value)
        if (value === 'potato') { x = 0 }
        if (value === 'sweet-potato') { x = 125 }
        if (value === "carrot") { x = 250 }
        line.style.transform = `translateX(${x}%)`

    }
    return (
        <>
            <div id="tab-container">
                <div id="tab-wrap">
                    <input type="radio" id='potato' onClick={onClick} name="tab" value="potato" defaultChecked />
                    <label htmlFor="potato" className="tab-label" value="potato">
                        <div id="text-potato" value="potato">감자</div>
                    </label>

                    <input type="radio" id='sweet-potato' onClick={onClick} name="tab" value="sweet-potato" />
                    <label htmlFor="sweet-potato" className="tab-label">
                        <div id="text-sweet" value="sweet-potato" >고구마</div>
                    </label>
                    <input type="radio" id='carrot' onClick={onClick} name="tab" value="carrot" />
                    <label htmlFor="carrot" className="tab-label">
                        <div id="text-carrot" value="carrot">당근</div>
                    </label>
                </div>
                <div id="line-section">
                    <div id="under-line"></div>
                </div>

            </div >



        </>
    )






}