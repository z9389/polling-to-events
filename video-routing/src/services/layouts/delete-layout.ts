import { NotFoundError } from "../../errors/not-found-error";
import { layoutsRepository } from "../../repositories/layouts/layouts-repository";

export async function deleteLayout(id: string): Promise<void> {
  const deleted = await layoutsRepository.delete(id);

  if (!deleted) {
    throw new NotFoundError(`Layout not found: ${id}`);
  }
}
