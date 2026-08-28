import { defineConfig, globalIgnores } from 'eslint/config';
import eslintReact from '@eslint-react/eslint-plugin';
import eslintJs from '@eslint/js';
import eslintPluginAstro from 'eslint-plugin-astro';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import globals from 'globals';
import typescriptEslintParser from '@typescript-eslint/parser';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores(['node_modules/', 'public/', 'dist/', '.astro/', 'worker-configuration.d.ts']),
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    extends: [
      eslintJs.configs.recommended,
      tseslint.configs.recommended,
      eslintReact.configs['recommended-typescript'],
      eslintPluginAstro.configs.recommended,
      eslintConfigPrettier,
    ],
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        project: true,
        sourceType: 'module',
        env: {
          es2022: true,
        },
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
]);
