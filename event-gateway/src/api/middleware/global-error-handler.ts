import type { FastifyError, FastifyReply, FastifyRequest } from "fastify";
import { ZodError } from "zod";

export function globalErrorHandler(
  error: FastifyError | Error,
  request: FastifyRequest,
  reply: FastifyReply,
) {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ error: "Validation error", issues: error.issues });
  }

  request.log.error(error);

  return reply.status(500).send({ error: "Internal Server Error" });
}
