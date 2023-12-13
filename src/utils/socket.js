import { io } from "socket.io-client";

const wsUrl = "https://apichat.nirwana.id";

export const socket = io(wsUrl);
