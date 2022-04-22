import "./Input.css";
import { faCircleCheck, faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
export default function Input() {
  const regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

  const [isChecked, setIsChecked] = useState(false);
  const [showPw, setShowPw] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  const onKeyUp = (e) => {
    const mail = e.target.value;
    let isRight = regEmail.test(mail);
    setIsChecked(isRight);
  };

  const onClick = (e) => {
    setShowPw(e.target.checked);
  };

  const checkFocus = (e) => {
    let inputFocus = document.getElementById("password") === document.activeElement;
    setIsFocus(inputFocus);
  };
  return (
    <>
      <div id="input-wrap">
        <div id="input-container">
          <form id="input-body">
            <div id="email-section">
              <div className="input-title">E-mail</div>
              <div id="input-mail">
                <input type="text" id="mail" onKeyUp={onKeyUp} onMouseUp={checkFocus} placeholder="이메일을 입력하세요" />
                <FontAwesomeIcon icon={faCircleCheck} color={isChecked ? "#2289dd" : "#d3d3d3"} />
              </div>
              <div id={isFocus && !isChecked ? "show-message" : "hide-message"}>Invalid e-mail address.</div>
            </div>
            <div id="password-section">
              <div className="input-title">Password</div>
              <div id="input-password">
                <input type={showPw ? "text" : "password"} id="password" placeholder="비밀번호를 입력하세요" autoComplete="off" onChange={checkFocus} />
                <input type="checkbox" id="show-password" name="show-password" onClick={onClick} />
                <label htmlFor="show-password">
                  <div id="icons">
                    <FontAwesomeIcon id={showPw ? "show" : "not-show"} color="#d3d3d3" icon={faEyeSlash} />
                    <FontAwesomeIcon id={showPw ? "not-show" : "show"} color="#2289dd" icon={faEye} />
                  </div>
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
