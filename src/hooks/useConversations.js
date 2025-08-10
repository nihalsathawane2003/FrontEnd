import { useEffect, useState } from "react";
import { getConversations } from "../services/api";
import { socket } from "../services/socket";

export default function useConversations() {
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    fetchData();

    socket.on("new_message", fetchData);
    socket.on("status_update", fetchData);

    return () => {
      socket.off("new_message");
      socket.off("status_update");
    };
  }, []);

  const fetchData = async () => {
  try {
    const data = await getConversations();
    if (data && data.length > 0) {
      setConversations(data);
    } else {
      setConversations(mockData);
    }
  } catch (error) {
    console.error("Error fetching conversations:", error);
    setConversations(mockData);
  }
};

// const mockData = [
//   { wa_id: "111", name: "John Doe", lastMessage: "Hey there!" },
//   { wa_id: "222", name: "Jane Smith", lastMessage: "How’s it going?" },
//   { wa_id: "333", name: "Alex Brown", lastMessage: "See you later." },
// ];


  return conversations;
}
