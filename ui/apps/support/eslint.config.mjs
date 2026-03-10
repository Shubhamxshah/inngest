import { tanstackConfig } from "@tanstack/eslint-config";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default [
  {
    ignores: [".output/**", "dist/**", "node_modules/**"],
  },
  ...tanstackConfig,
];
