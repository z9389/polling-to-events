export interface LivenessResult {
	status: "ok";
}

export async function getLiveness(): Promise<LivenessResult> {
	return { status: "ok" };
}
