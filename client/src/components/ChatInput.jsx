import React from "react";
import { useState } from "react";

const ChatInput = ({ sendMessage, loading }) => {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (value === "") return;
    sendMessage({ sender: "user", message: value });
    setValue("");
  };
  return (
    <div
      className="w-full bg-white bg-opacity-10 h-15 rounded-lg px-5
    py-4 overflow-auto relative"
    >
      {loading ? (
        <img src="./loader.gif" className="w-8 m-auto" />
      ) : (
        <>
          <textarea
            onKeyDown={(e) => {
              e.keyCode === 13 && e.shiftKey === false && handleSubmit();
            }}
            rows={1}
            className="border-0 bg-transparent outline-none w-11/12 resize-none"
            value={value}
            type="text"
            onChange={(e) => setValue(e.target.value)}
            placeholder={"Type here..."}
          />

          <img
            onClick={handleSubmit}
            src="./send.png"
            width={20}
            alt="send-button"
            className="absolute top-5
        right-4 hover:cursor-pointer ease-in duration-100 hover:scale-125
        "
          />
        </>
      )}
    </div>
  );
};

export default ChatInput;
