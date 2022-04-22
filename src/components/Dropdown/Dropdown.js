import "./Dropdown.css";

import { faAngleDown, faAngleUp, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
export default function Dropdown() {
  const [dropdown, setDropDown] = useState(false);
  const [cpState, setCpState] = useState("");

  const onClick = () => {
    dropdown ? setDropDown(false) : setDropDown(true);
  };

  const setComponent = (e) => {
    document.getElementById("current-option").innerText = e.target.innerText;
    setDropDown(false);
  };
  const filter = () => {
    let keyword = document.getElementById("search-input").value.toLowerCase();
    let optionList = document.getElementsByClassName("dropdown-option");
    for (let i = 0; i < optionList.length; i++) {
      let each = optionList[i].innerText.toLocaleLowerCase();
      if (each.indexOf(keyword) !== -1) {
        optionList[i].style.display = "flex";
      } else {
        optionList[i].style.display = "none";
      }
    }
  };

  return (
    <>
      <div id="dropdown-wrap">
        <div id="dropdown-container">
          <div id="current-section">
            <input type="checkbox" id="dropdown-check" onClick={onClick}></input>
            <label htmlFor="dropdown-check" id="current-head">
              <div id="current-option">Show All</div>
              <div id="dropdown-btn">
                <FontAwesomeIcon icon={dropdown ? faAngleUp : faAngleDown} id="angle-down" />
              </div>
            </label>
          </div>

          <ul id={dropdown ? "dropdown-list" : "unrevealed"}>
            <div id="search-option">
              <FontAwesomeIcon icon={faMagnifyingGlass} color="#2289dd" id="search-icon" />
              <input type="text" id="search-input" placeholder="Search Component" onKeyUp={filter}></input>
            </div>
            <li className="dropdown-option-show" onClick={setComponent} value="Show All">
              Show All
            </li>
            <li className="dropdown-option" onClick={setComponent} value="Toggle Component">
              Toggle Component
            </li>
            <li className="dropdown-option" onClick={setComponent} value="Tab Component">
              Tab Component
            </li>
            <li className="dropdown-option" onClick={setComponent} value="Slider Component">
              Slider Component
            </li>
            <li className="dropdown-option" onClick={setComponent} value="Input Component">
              Input Component
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
