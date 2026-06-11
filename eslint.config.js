import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: {
      // These two rules only guard Vite fast-refresh during dev — they don't
      // affect correctness or the build. We intentionally co-locate small
      // helpers with their component: each question type exports its input
      // component alongside its `grade`/`isAnswered` functions (the question-
      // type contract), and useProgress.jsx exports the hook beside its
      // provider. That keeps each pattern readable in one file.
      'react-refresh/only-export-components': 'off',
      'react-hooks/static-components': 'off',
    },
  },
])
