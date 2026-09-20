// ESLint flat config — regras leves para o front-end em Vanilla JS (ES Modules).
import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  prettier, // desliga regras que conflitam com o Prettier
  {
    files: ["src/**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: { ...globals.browser },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "warn",
    },
  },
  {
    // Ambiente de testes (Vitest)
    files: ["**/*.test.js"],
    languageOptions: {
      globals: { ...globals.node },
    },
  },
];
