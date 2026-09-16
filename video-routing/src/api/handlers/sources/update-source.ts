import type { FastifyReply, FastifyRequest } from "fastify";
import type { UpdateSourceRequest } from "../../../domain/source";
import { updateSource } from "../../../services/sources/update-source";

export async function updateSourceHandler(
	request: FastifyRequest<{
		Params: { id: string };
		Body: UpdateSourceRequest;
	}>,
	reply: FastifyReply,
) {
	const source = await updateSource(request.params.id, request.body);
	return reply.status(200).send(source);
}
