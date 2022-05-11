import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_NEW_CLICKS, SET_POPUP } from "../../redux/actions/actions";
import "./index.css";
import YouLose from "../../assets/images/lose-game-img.png";
import YouWon from "../../assets/images/won-game-img.png";

function Popup() {
  let clicksId = useSelector((state) => state.main.clicksId);
  const dispatch = useDispatch();

  function playAgain() {
    let newClicksId = [];
    dispatch({
      type: SET_NEW_CLICKS,
      payload: newClicksId,
    });
    dispatch({
      type: SET_POPUP,
      payload: false,
    });
  }
  let h1title = clicksId.length === 25 ? "VICTORY" : "YOU LOSE";
  let wonOrLoseImg = clicksId.length === 25 ? YouWon : YouLose;

  function handleClick(e) {
    e.target.id && playAgain();
  }

  return (
    <div className="pop-box-wrapper" id="pop-box-wrapper" onClick={handleClick}>
      <div className="pop-box">
        <div className="text-box">
          <h1>{h1title}</h1>
          <div className="score">
            <h2>Score</h2>
            <h3>{clicksId.length}/25</h3>
            <button onClick={playAgain}>Play Again</button>
          </div>
        </div>
        <div className="img-box">
          <img src={wonOrLoseImg} />
        </div>
      </div>
    </div>
  );
}

export default Popup;
