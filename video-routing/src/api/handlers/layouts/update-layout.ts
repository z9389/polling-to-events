import type { FastifyReply, FastifyRequest } from "fastify";
import type { UpdateLayoutRequest } from "../../../domain/layout";
import { updateLayout } from "../../../services/layouts/update-layout";

export async function updateLayoutHandler(
	request: FastifyRequest<{
		Params: { id: string };
		Body: UpdateLayoutRequest;
	}>,
	reply: FastifyReply,
) {
	const layout = await updateLayout(request.params.id, request.body);
	return reply.status(200).send(layout);
}
