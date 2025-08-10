import React, { useState, useEffect } from "react";
import { getMessages, sendMessage } from "../services/api";
import { socket } from "../services/socket";
import MessageBubble from "./MessageBubble";

export default function ChatWindow({ selected }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (selected) {
      loadMessages(selected.wa_id);
      socket.on("new_message", (msg) => {
        if (msg.wa_id === selected.wa_id) {
          loadMessages(selected.wa_id);
        }
      });
    }
    return () => {
      socket.off("new_message");
    };
  }, [selected]);

  const loadMessages = async (wa_id) => {
    const data = await getMessages(wa_id);
    setMessages(data);
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    await sendMessage({
      wa_id: selected.wa_id,
      from: process.env.REACT_APP_MY_BUSINESS_ID || "me",
      to: selected.wa_id,
      text: input,
      type: "text",
    });
    setInput("");
    loadMessages(selected.wa_id);
  };

  if (!selected) {
    return <div className="chat-window empty">Select a conversation</div>;
  }

  return (
    <div className="chat-window">
      <div className="messages">
        {messages.map((msg) => (
          <MessageBubble key={msg.msg_id} message={msg} myId="me" />
        ))}
      </div>
      <div className="input-bar">
        <input
          type="text"
          placeholder="Type a message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}
