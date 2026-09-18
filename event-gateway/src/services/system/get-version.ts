import packageJson from "../../../package.json";

export interface VersionResult {
  version: string;
}

export async function getVersion(): Promise<VersionResult> {
  return { version: packageJson.version };
}
