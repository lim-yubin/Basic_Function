import { useState } from "react"
import "./Toggle.css"



export default function Toggle() {
    const [toggleState, setToggleState] = useState(false)
    const onChange = () => {
        toggleState ? setToggleState(false) : setToggleState(true)
    }



    return (
        <>
            <div className="toggle-wrap">
                <input type="checkbox" id="toggle-input" name="toggle-input" onChange={onChange}></input>
                <label className="toggle-label" htmlFor="toggle-input">
                    <div className="toggle-state">
                        <div className={toggleState ? "basic-false" : "basic-true"}>
                            기본
                        </div>
                        <div className={toggleState ? "detail-true" : "detail-false"}>
                            상세
                        </div>
                    </div>
                </label>

            </div>
        </>
    )
}