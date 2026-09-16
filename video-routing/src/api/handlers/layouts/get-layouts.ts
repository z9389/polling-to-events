import type { FastifyReply, FastifyRequest } from "fastify";
import { listLayouts } from "../../../services/layouts/list-layouts";

export async function getLayoutsHandler(
	_request: FastifyRequest,
	reply: FastifyReply,
) {
	const layouts = await listLayouts();
	return reply.status(200).send(layouts);
}
