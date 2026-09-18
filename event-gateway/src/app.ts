import Fastify, { type FastifyInstance } from "fastify";
import { apiRoutes } from "./api/routes";
import { globalErrorHandler } from "./api/middleware";

export function buildApp(): FastifyInstance {
  const app = Fastify({ logger: true });

  app.setErrorHandler(globalErrorHandler);
  app.register(apiRoutes);

  return app;
}
