import { io } from "socket.io-client";

const SOCKET_URL = "http://localhost:5000"; // change to your backend URL

export const socket = io(SOCKET_URL, {
  transports: ["websocket", "polling"],
});
