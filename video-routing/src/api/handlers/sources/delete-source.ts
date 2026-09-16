import type { FastifyReply, FastifyRequest } from "fastify";
import { deleteSource } from "../../../services/sources/delete-source";

export async function deleteSourceHandler(
	request: FastifyRequest<{ Params: { id: string } }>,
	reply: FastifyReply,
) {
	await deleteSource(request.params.id);
	return reply.status(204).send();
}
