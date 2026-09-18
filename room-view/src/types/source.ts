export type SourceStatus = "online" | "offline";

export interface Source {
  id: string;
  name: string;
  status: SourceStatus;
}
