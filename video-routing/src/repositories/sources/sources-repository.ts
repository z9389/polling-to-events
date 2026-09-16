import { randomUUID } from "node:crypto";
import type {
	CreateSourceRequest,
	Source,
	UpdateSourceRequest,
} from "../../domain/source";

export class SourcesRepository {
	readonly seedSourceIds = {
		surgicalFieldCamera: randomUUID(),
		boomCamera: randomUUID(),
	};

	private readonly store = new Map<string, Source>();

	constructor() {
		this.seed();
	}

	private seed(): void {
		this.store.clear();
		this.store.set(this.seedSourceIds.surgicalFieldCamera, {
			id: this.seedSourceIds.surgicalFieldCamera,
			name: "Surgical Field Camera",
			status: "online",
		});
		this.store.set(this.seedSourceIds.boomCamera, {
			id: this.seedSourceIds.boomCamera,
			name: "Boom Camera",
			status: "offline",
		});
	}

	async create(input: CreateSourceRequest): Promise<Source> {
		const source: Source = { id: randomUUID(), ...input };
		this.store.set(source.id, source);
		return source;
	}

	async delete(id: string): Promise<boolean> {
		return this.store.delete(id);
	}

	async findAll(): Promise<Source[]> {
		return Array.from(this.store.values());
	}

	async update(
		id: string,
		patch: UpdateSourceRequest,
	): Promise<Source | undefined> {
		const existing = this.store.get(id);
		if (!existing) {
			return undefined;
		}

		const updated: Source = { ...existing, ...patch };
		this.store.set(id, updated);
		return updated;
	}
}

export const sourcesRepository = new SourcesRepository();
