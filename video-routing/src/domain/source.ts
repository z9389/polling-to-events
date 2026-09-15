import { z } from "zod";

export const sourceStatusSchema = z.enum(["online", "offline"]);
export type SourceStatus = z.infer<typeof sourceStatusSchema>;

export const sourceSchema = z.object({
	id: z.string(),
	name: z.string(),
	status: sourceStatusSchema,
});
export type Source = z.infer<typeof sourceSchema>;

export const createSourceSchema = sourceSchema.omit({ id: true });
export type CreateSourceRequest = z.infer<typeof createSourceSchema>;

export const updateSourceSchema = createSourceSchema.partial();
export type UpdateSourceRequest = z.infer<typeof updateSourceSchema>;
