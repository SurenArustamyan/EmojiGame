import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_NEW_CLICKS, SET_NEW_STATE, SET_POPUP, } from "../../redux/actions/actions";
import EmojiComponent from "../emoji-box-component";
import History from "../history";
import Popup from "../popup";
import "./index.css";
import uuid from 'react-uuid'

const GamePlay = () => {
  const dispatch = useDispatch();
  let state = useSelector((state) => state.main.data);
  let clicksId = useSelector((state) => state.main.clicksId);
  let popup = useSelector((state) => state.main.popup);
  let history = useSelector((state) => state.main.history);
  let gameHistory = JSON.parse(localStorage.getItem("History")) || [];

  function changeEmojiRandom(id) {
    let isClicked = clicksId.some((item) => item === id);
    if (clicksId.length === 0) {
      const date = new Date();
      sessionStorage.setItem("startSecond", date.getSeconds());
      sessionStorage.setItem("startMinute", date.getMinutes());
    }
    if (isClicked || clicksId.length === 25) {
      dispatch({
        type: SET_POPUP,
        payload: true,
      });
      const date = new Date();
      let finishSecond = date.getSeconds();
      let finishMinute = date.getMinutes();
      let startSecond = sessionStorage.getItem("startSecond");
      let startMinute = sessionStorage.getItem("startMinute");
      let time =
        (finishMinute - startMinute) * 60 + (finishSecond - startSecond);
      let h1title = "LOSE";
      if (gameHistory.length === 5) {
        gameHistory.shift();
      }
      gameHistory.push({
        time: time + " Seconds",
        winOrLose: h1title,
        score: clicksId.length + "/25",
      });
      localStorage.setItem("History", JSON.stringify(gameHistory));
    } else {
      let newClicksId = [...clicksId];
      newClicksId.push(id);
      dispatch({
        type: SET_NEW_CLICKS,
        payload: newClicksId,
      });
      if (clicksId.length === 24) {
        dispatch({
          type: SET_POPUP,
          payload: true,
        });
        const date = new Date();
        let finishSecond = date.getSeconds();
        let finishMinute = date.getMinutes();
        let startSecond = sessionStorage.getItem("startSecond");
        let startMinute = sessionStorage.getItem("startMinute");
        let time =
          (finishMinute - startMinute) * 60 + (finishSecond - startSecond);
        let h1title = "VICTORY"
        if (gameHistory.length === 5) {
          gameHistory.shift();
        }
        gameHistory.push({
          time: time + " Seconds",
          winOrLose: h1title,
          score: clicksId.length + 1 + "/25",
        });
        localStorage.setItem("History", JSON.stringify(gameHistory));
      }
    }

    let newState = [...state.sort(() => Math.random() - 0.5)];
    dispatch({
      type: SET_NEW_STATE,
      payload: newState,
    });
  }

  return (
    <main className="big-box">
      <div className="game-box">
        {history ? <History /> : null}
        {popup ? <Popup /> : null}
        {state.map((elem) => {
          return (
            <EmojiComponent
              src={elem.src}
              changeEmojiRandom={changeEmojiRandom}
              id={elem.id}
              key={uuid()}
            />
          );
        })}
      </div>
    </main>
  );
};

export default GamePlay;
