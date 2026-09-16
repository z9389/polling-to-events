import type { Layout } from "../../domain/layout";
import { layoutsRepository } from "../../repositories/layouts/layouts-repository";

export async function listLayouts(): Promise<Layout[]> {
	return layoutsRepository.findAll();
}
