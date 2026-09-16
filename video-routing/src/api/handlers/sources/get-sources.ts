import type { FastifyReply, FastifyRequest } from "fastify";
import { listSources } from "../../../services/sources/list-sources";

export async function getSourcesHandler(
  _request: FastifyRequest,
  reply: FastifyReply,
) {
  const sources = await listSources();
  return reply.status(200).send(sources);
}
