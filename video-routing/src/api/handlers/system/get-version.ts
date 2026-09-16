import type { FastifyReply, FastifyRequest } from "fastify";
import { getVersion } from "../../../services/system/get-version";

export async function getVersionHandler(
	_request: FastifyRequest,
	reply: FastifyReply,
) {
	const result = await getVersion();
	return reply.status(200).send(result);
}
