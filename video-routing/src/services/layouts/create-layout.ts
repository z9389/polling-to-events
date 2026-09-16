import type { CreateLayoutRequest, Layout } from "../../domain/layout";
import { layoutsRepository } from "../../repositories/layouts/layouts-repository";

export async function createLayout(
	input: CreateLayoutRequest,
): Promise<Layout> {
	return layoutsRepository.create(input);
}
