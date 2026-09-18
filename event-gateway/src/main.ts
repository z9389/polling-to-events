import { buildApp } from "./app";
import { initIo } from "./realtime/io";

const PORT = 4091;

try {
  const app = buildApp();

  initIo(app.server);

  await app.listen({ port: PORT });
} catch (err) {
  console.error("🛑 Failed to start service:", (err as Error).message);
  process.exit(1);
}
