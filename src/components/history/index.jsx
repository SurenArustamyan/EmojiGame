import React from "react";
import { useDispatch } from "react-redux";
import { SET_HISTORY } from "../../redux/actions/actions";
import "./index.css";
import uuid from 'react-uuid'

const History = () => {
  const dispatch = useDispatch();
  let gameHistory = JSON.parse(localStorage.getItem("History")) || [];
  function closeHistory(e) {
    e.target.id &&
      dispatch({
        type: SET_HISTORY,
        payload: false,
      });
  }

  return (
    <div className="container" id="container" onClick={closeHistory}>
      <div className="min-container">
        <h1>LAST 5 GAMES</h1>
        <div className="close-container" id="close-container" onClick={closeHistory}>
          <div className="left-right" id="left-right"></div>
          <div className="right-left" id="right-left"></div>
          <label className="close">close</label>
        </div>
        <table key={uuid()}>
        {gameHistory.map((elem) => {
          return (
            <thead key={uuid()}>
                <tr className="list" >
                  <td>{elem.time}</td>
                  <td>{elem.winOrLose}</td>
                  <td>{elem.score}</td>
                </tr>
            </thead>
            );
          })}
          </table>
      </div>
    </div>
  );
};

export default History;
