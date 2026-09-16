import { NotFoundError } from "../../errors/not-found-error";
import { sourcesRepository } from "../../repositories/sources/sources-repository";

export async function deleteSource(id: string): Promise<void> {
  const deleted = await sourcesRepository.delete(id);

  if (!deleted) {
    throw new NotFoundError(`Source not found: ${id}`);
  }
}
