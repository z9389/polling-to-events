import type { FastifyReply, FastifyRequest } from "fastify";
import type { CreateSourceRequest } from "../../../domain/source";
import { createSource } from "../../../services/sources/create-source";

export async function createSourceHandler(
	request: FastifyRequest<{ Body: CreateSourceRequest }>,
	reply: FastifyReply,
) {
	const source = await createSource(request.body);
	return reply.status(201).send(source);
}
