import type { FastifyReply, FastifyRequest } from "fastify";
import { getLiveness } from "../../../services/system/get-liveness";

export async function getLivenessHandler(
  _request: FastifyRequest,
  reply: FastifyReply,
) {
  const result = await getLiveness();
  return reply.status(200).send(result);
}
