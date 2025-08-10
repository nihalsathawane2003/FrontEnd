import React, { useState } from "react";
import useConversations from "../hooks/useConversations";
import Sidebar from "../components/Sidebar";
import ChatHeader from "../components/ChatHeader";
import ChatWindow from "../components/ChatWindow";

export default function Home() {
  const conversations = useConversations();
  const [selected, setSelected] = useState(null);

  return (
    <div className="app-container">
      <Sidebar
        conversations={conversations}
        onSelect={setSelected}
        selected={selected}
      />
      <div className="chat-section">
        <ChatHeader user={selected} />
        <ChatWindow selected={selected} />
      </div>
    </div>
  );
}
