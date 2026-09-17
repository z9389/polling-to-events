import { buildApp } from "./app";

const PORT = 4090;

try {
	const app = buildApp();

	await app.listen({ port: PORT });
} catch (err) {
	console.error("🛑 Failed to start service:", (err as Error).message);
	process.exit(1);
}
