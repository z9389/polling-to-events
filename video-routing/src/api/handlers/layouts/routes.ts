import type { FastifyInstance } from "fastify";
import { z } from "zod";
import type {
	CreateLayoutRequest,
	UpdateLayoutRequest,
} from "../../../domain/layout";
import { createLayoutSchema, updateLayoutSchema } from "../../../domain/layout";
import { validate } from "../../middleware/validate";
import { createLayoutHandler } from "./create-layout";
import { deleteLayoutHandler } from "./delete-layout";
import { getLayoutsHandler } from "./get-layouts";
import { updateLayoutHandler } from "./update-layout";

const idParamsSchema = z.object({ id: z.string() });

export async function layoutsRoutes(app: FastifyInstance) {
	app.get("/", getLayoutsHandler);

	app.post<{ Body: CreateLayoutRequest }>(
		"/",
		{ preHandler: validate({ body: createLayoutSchema }) },
		createLayoutHandler,
	);

	app.patch<{ Params: { id: string }; Body: UpdateLayoutRequest }>(
		"/:id",
		{
			preHandler: validate({
				params: idParamsSchema,
				body: updateLayoutSchema,
			}),
		},
		updateLayoutHandler,
	);

	app.delete<{ Params: { id: string } }>(
		"/:id",
		{ preHandler: validate({ params: idParamsSchema }) },
		deleteLayoutHandler,
	);
}
