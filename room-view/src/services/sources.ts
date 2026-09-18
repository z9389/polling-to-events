import type { Source } from "../types/source";

const BASE_URL = "http://localhost:4090";

export async function fetchSources(): Promise<Source[]> {
  const res = await fetch(`${BASE_URL}/sources`);

  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`);
  }

  return res.json();
}
