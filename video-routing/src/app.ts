import cors from "@fastify/cors";
import Fastify, { type FastifyInstance } from "fastify";
import { globalErrorHandler } from "./api/middleware";
import { apiRoutes } from "./api/routes";

export function buildApp(): FastifyInstance {
  const app = Fastify({ logger: true });

  app.setErrorHandler(globalErrorHandler);
  app.register(cors, { origin: ["http://localhost:5173"] });
  app.register(apiRoutes);

  return app;
}
