import type { FastifyReply, FastifyRequest } from "fastify";
import { deleteLayout } from "../../../services/layouts/delete-layout";

export async function deleteLayoutHandler(
	request: FastifyRequest<{ Params: { id: string } }>,
	reply: FastifyReply,
) {
	await deleteLayout(request.params.id);
	return reply.status(204).send();
}
