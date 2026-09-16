import type { FastifyReply, FastifyRequest } from "fastify";
import type { CreateLayoutRequest } from "../../../domain/layout";
import { createLayout } from "../../../services/layouts/create-layout";

export async function createLayoutHandler(
	request: FastifyRequest<{ Body: CreateLayoutRequest }>,
	reply: FastifyReply,
) {
	const layout = await createLayout(request.body);
	return reply.status(201).send(layout);
}
