import React from "react";
import "./index.css";

const EmojiComponent = (props) => {
  const { src, changeEmojiRandom, id } = props;

  return (
    <div
      id={id}
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: '80%',
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="emoji-box"
      onClick={() => changeEmojiRandom(id)}
    ></div>
  );
};

export default EmojiComponent;
