import type { Source } from "../../domain/source";
import { sourcesRepository } from "../../repositories/sources/sources-repository";

export async function listSources(): Promise<Source[]> {
	return sourcesRepository.findAll();
}
