export type LayoutType =
  | "side-by-side"
  | "top-to-bottom"
  | "quad"
  | "picture-in-picture";

export interface Layout {
  id: string;
  name: string;
  type: LayoutType;
  sourceIds: string[];
}
