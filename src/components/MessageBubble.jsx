import React from "react";

export default function MessageBubble({ message, myId }) {
  const isMine = message.from === myId;
  return (
    <div className={`bubble ${isMine ? "mine" : "theirs"}`}>
      <p>{message.text}</p>
      <small>
        {new Date(message.timestamp).toLocaleTimeString()} • {message.status}
      </small>
    </div>
  );
}
