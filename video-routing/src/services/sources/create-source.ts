import type { CreateSourceRequest, Source } from "../../domain/source";
import { sourcesRepository } from "../../repositories/sources/sources-repository";

export async function createSource(
  input: CreateSourceRequest,
): Promise<Source> {
  return sourcesRepository.create(input);
}
