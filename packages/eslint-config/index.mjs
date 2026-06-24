import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export function createLibraryConfig() {
  return tseslint.config(
    {
      ignores: [
        ".next/**",
        ".turbo/**",
        "coverage/**",
        "dist/**",
        "node_modules/**",
        "out/**",
      ],
    },
    eslint.configs.recommended,
    ...tseslint.configs.strict,
    ...tseslint.configs.stylistic,
    {
      files: ["**/*.{ts,tsx}"],
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
      },
      rules: {
        "@typescript-eslint/consistent-type-imports": [
          "error",
          { fixStyle: "inline-type-imports" },
        ],
        "@typescript-eslint/no-import-type-side-effects": "error",
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            argsIgnorePattern: "^_",
            caughtErrorsIgnorePattern: "^_",
            varsIgnorePattern: "^_",
          },
        ],
      },
    },
  );
}
