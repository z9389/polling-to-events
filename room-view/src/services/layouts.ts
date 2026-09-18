import type { Layout } from "../types/layout";

const BASE_URL = "http://localhost:4090";

export async function fetchLayouts(): Promise<Layout[]> {
  const res = await fetch(`${BASE_URL}/layouts`);

  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`);
  }

  return res.json();
}
