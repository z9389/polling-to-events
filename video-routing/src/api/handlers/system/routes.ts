import type { FastifyInstance } from "fastify";
import { getLivenessHandler } from "./get-liveness";
import { getReadinessHandler } from "./get-readiness";
import { getVersionHandler } from "./get-version";

export async function systemRoutes(app: FastifyInstance) {
	app.get("/liveness", getLivenessHandler);
	app.get("/readiness", getReadinessHandler);
	app.get("/version", getVersionHandler);
}
