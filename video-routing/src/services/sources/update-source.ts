import type { Source, UpdateSourceRequest } from "../../domain/source";
import { NotFoundError } from "../../errors/not-found-error";
import { sourcesRepository } from "../../repositories/sources/sources-repository";

export async function updateSource(
  id: string,
  patch: UpdateSourceRequest,
): Promise<Source> {
  const updated = await sourcesRepository.update(id, patch);

  if (!updated) {
    throw new NotFoundError(`Source not found: ${id}`);
  }

  return updated;
}
