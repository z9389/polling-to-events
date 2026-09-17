import type { FastifyInstance } from "fastify";
import { layoutsRoutes } from "./handlers/layouts/routes";
import { sourcesRoutes } from "./handlers/sources/routes";
import { systemRoutes } from "./handlers/system/routes";

export async function apiRoutes(app: FastifyInstance) {
	await app.register(systemRoutes, { prefix: "/system" });
	await app.register(sourcesRoutes, { prefix: "/sources" });
	await app.register(layoutsRoutes, { prefix: "/layouts" });
}
