import type { FastifyInstance } from "fastify";
import { z } from "zod";
import type {
	CreateSourceRequest,
	UpdateSourceRequest,
} from "../../../domain/source";
import { createSourceSchema, updateSourceSchema } from "../../../domain/source";
import { validate } from "../../middleware/validate";
import { createSourceHandler } from "./create-source";
import { deleteSourceHandler } from "./delete-source";
import { getSourcesHandler } from "./get-sources";
import { updateSourceHandler } from "./update-source";

const idParamsSchema = z.object({ id: z.string() });

export async function sourcesRoutes(app: FastifyInstance) {
	app.get("/", getSourcesHandler);

	app.post<{ Body: CreateSourceRequest }>(
		"/",
		{ preHandler: validate({ body: createSourceSchema }) },
		createSourceHandler,
	);

	app.patch<{ Params: { id: string }; Body: UpdateSourceRequest }>(
		"/:id",
		{
			preHandler: validate({
				params: idParamsSchema,
				body: updateSourceSchema,
			}),
		},
		updateSourceHandler,
	);

	app.delete<{ Params: { id: string } }>(
		"/:id",
		{ preHandler: validate({ params: idParamsSchema }) },
		deleteSourceHandler,
	);
}
