import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { delimiter, join } from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const supportedTasks = new Set([
  "build",
  "clean",
  "dev",
  "format",
  "lint",
  "typecheck",
]);

const task = process.argv[2];

if (!supportedTasks.has(task)) {
  console.error(`Unsupported Turbo task: ${task ?? "<missing>"}`);
  process.exit(1);
}

const workspaceRoot = fileURLToPath(new URL("..", import.meta.url));
const shimDirectory = join(workspaceRoot, "node_modules", ".sanaa-bin");

mkdirSync(shimDirectory, { recursive: true });

if (process.platform === "win32") {
  writeFileSync(
    join(shimDirectory, "pnpm.cmd"),
    "@echo off\r\ncorepack pnpm %*\r\n",
    "utf8",
  );
} else {
  const shimPath = join(shimDirectory, "pnpm");
  writeFileSync(shimPath, '#!/usr/bin/env sh\nexec corepack pnpm "$@"\n', "utf8");
  chmodSync(shimPath, 0o755);
}

const environment = {
  ...process.env,
  PATH: [
    shimDirectory,
    join(workspaceRoot, "node_modules", ".bin"),
    process.env.PATH ?? "",
  ].join(delimiter),
};
const command = process.platform === "win32" ? "turbo.cmd" : "turbo";
const result = spawnSync(command, ["run", task], {
  cwd: workspaceRoot,
  env: environment,
  shell: process.platform === "win32",
  stdio: "inherit",
});

if (result.error) {
  console.error(result.error.message);
}

process.exit(result.status ?? 1);
