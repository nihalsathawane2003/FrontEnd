import React from "react";

export default function Sidebar({ conversations, onSelect, selected }) {
  return (
    <div className="sidebar">
      <h2>Chats</h2>
      {conversations.map((conv) => (
        <div
          key={conv.wa_id}
          className={`chat-item ${selected?.wa_id === conv.wa_id ? "active" : ""}`}
          onClick={() => onSelect(conv)}
        >
          <div className="chat-name">{conv.name || conv.wa_id}</div>
          <div className="chat-last">{conv.lastMessage}</div>
        </div>
      ))}
    </div>
  );
}
