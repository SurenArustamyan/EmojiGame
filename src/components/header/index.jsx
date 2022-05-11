import React from "react";
import "./index.css";
import Logo from "../../assets/images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { SET_HISTORY } from "../../redux/actions/actions";

const Header = () => {
  let clicksId = useSelector((state) => state.main.clicksId);
  const dispatch = useDispatch();
  let topScore = sessionStorage.getItem("topScore");
  topScore = null ? (topScore = 0) : topScore;
  if (topScore < clicksId.length) {
    sessionStorage.setItem("topScore", clicksId.length);
  }
  topScore === null ? (topScore = 0) : (topScore = topScore);

  function showHistory() {
    dispatch({
      type: SET_HISTORY,
      payload: true,
    });
  }
  return (
    <header>
      <div className="header-left">
        <a href="/">
          <img src={Logo} width="50" height="50" alt="logo" />
          <p>Emoji Game</p>
        </a>
      </div>
      <div className="header-right">
        <p>{`Score: ` + clicksId.length}</p>
        <p className="top">{`Top Score: ` + topScore}</p>
        <button onClick={showHistory}>History</button>
      </div>
    </header>
  );
};

export default Header;
