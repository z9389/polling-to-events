import type { Layout, UpdateLayoutRequest } from "../../domain/layout";
import { NotFoundError } from "../../errors/not-found-error";
import { layoutsRepository } from "../../repositories/layouts/layouts-repository";

export async function updateLayout(
	id: string,
	patch: UpdateLayoutRequest,
): Promise<Layout> {
	const updated = await layoutsRepository.update(id, patch);

	if (!updated) {
		throw new NotFoundError(`Layout not found: ${id}`);
	}

	return updated;
}
