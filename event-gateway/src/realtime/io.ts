import type { Server as HttpServer } from "node:http";
import { Server } from "socket.io";

let io: Server | undefined;

export function initIo(httpServer: HttpServer): Server {
  io = new Server(httpServer, {
    cors: { origin: ["http://localhost:5173"] },
  });

  return io;
}
