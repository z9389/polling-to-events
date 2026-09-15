import { z } from "zod";

export const displayLayoutTypeSchema = z.enum([
	"side-by-side",
	"top-to-bottom",
	"quad",
	"picture-in-picture",
]);
export type DisplayLayoutType = z.infer<typeof displayLayoutTypeSchema>;

export const layoutSchema = z.object({
	id: z.string(),
	name: z.string(),
	type: displayLayoutTypeSchema,
	sourceIds: z.array(z.string()),
});
export type Layout = z.infer<typeof layoutSchema>;

export const createLayoutSchema = layoutSchema.omit({ id: true });
export type CreateLayoutRequest = z.infer<typeof createLayoutSchema>;

export const updateLayoutSchema = createLayoutSchema.partial();
export type UpdateLayoutRequest = z.infer<typeof updateLayoutSchema>;
