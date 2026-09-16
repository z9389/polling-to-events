import type { FastifyReply, FastifyRequest } from "fastify";
import { getReadiness } from "../../../services/system/get-readiness";

export async function getReadinessHandler(
	_request: FastifyRequest,
	reply: FastifyReply,
) {
	const result = await getReadiness();
	return reply.status(200).send(result);
}
