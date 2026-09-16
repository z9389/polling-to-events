import { randomUUID } from "node:crypto";
import type {
	CreateLayoutRequest,
	Layout,
	UpdateLayoutRequest,
} from "../../domain/layout";
import { sourcesRepository } from "../sources/sources-repository";

export class LayoutsRepository {
	readonly seedLayoutIds = {
		defaultGrid: randomUUID(),
		roomFocus: randomUUID(),
	};

	private readonly store = new Map<string, Layout>();

	constructor() {
		this.seed();
	}

	private seed(): void {
		this.store.clear();
		this.store.set(this.seedLayoutIds.defaultGrid, {
			id: this.seedLayoutIds.defaultGrid,
			name: "Default Grid",
			type: "quad",
			sourceIds: [
				sourcesRepository.seedSourceIds.surgicalFieldCamera,
				sourcesRepository.seedSourceIds.boomCamera,
			],
		});
		this.store.set(this.seedLayoutIds.roomFocus, {
			id: this.seedLayoutIds.roomFocus,
			name: "Room Focus",
			type: "picture-in-picture",
			sourceIds: [sourcesRepository.seedSourceIds.surgicalFieldCamera],
		});
	}

	async create(input: CreateLayoutRequest): Promise<Layout> {
		const layout: Layout = { id: randomUUID(), ...input };
		this.store.set(layout.id, layout);
		return layout;
	}

	async delete(id: string): Promise<boolean> {
		return this.store.delete(id);
	}

	async findAll(): Promise<Layout[]> {
		return Array.from(this.store.values());
	}

	async update(
		id: string,
		patch: UpdateLayoutRequest,
	): Promise<Layout | undefined> {
		const existing = this.store.get(id);
		if (!existing) {
			return undefined;
		}

		const updated: Layout = { ...existing, ...patch };
		this.store.set(id, updated);
		return updated;
	}
}

export const layoutsRepository = new LayoutsRepository();
