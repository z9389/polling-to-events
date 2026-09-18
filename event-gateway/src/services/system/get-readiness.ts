export interface ReadinessResult {
  status: "ok";
}

export async function getReadiness(): Promise<ReadinessResult> {
  return { status: "ok" };
}
