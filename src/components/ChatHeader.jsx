import React from "react";

export default function ChatHeader({ user }) {
  if (!user) return null;
  return (
    <div className="chat-header">
      <h3>{user.name || user.wa_id}</h3>
      <small>{user.wa_id}</small>
    </div>
  );
}
