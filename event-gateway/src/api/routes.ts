import type { FastifyInstance } from "fastify";
import { systemRoutes } from "./handlers/system/routes";

export async function apiRoutes(app: FastifyInstance) {
  await app.register(systemRoutes, { prefix: "/system" });
}
