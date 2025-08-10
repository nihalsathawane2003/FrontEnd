import axios from "axios";

const API_URL = "http://localhost:5000/api/messages"; // base URL

export const getConversations = async () => {
  const res = await axios.get(`${API_URL}/conversations`);
  return res.data;
};

export const getMessages = async (wa_id) => {
  const res = await axios.get(`${API_URL}/${wa_id}`);
  return res.data;
};

export const sendMessage = async (wa_id, text) => {
  const res = await axios.post(`${API_URL}/${wa_id}/send`, { text });
  return res.data;
};

