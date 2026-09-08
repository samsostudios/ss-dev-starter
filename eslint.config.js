import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,

  {
    name: 'samso/files-ignoring',
    ignores: ['**/dist/**'],
  },

  {
    name: 'samso/imports-sorting',
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },

  {
    name: 'samso/custom-rules',
    rules: {
      'no-else-return': ['error', { allowElseIf: false }],
      'no-return-assign': ['error', 'always'],

      'prefer-destructuring': [
        'error',
        {
          VariableDeclarator: {
            array: false,
            object: true,
          },
          AssignmentExpression: {
            array: true,
            object: false,
          },
        },
        {
          enforceForRenamedProperties: false,
        },
      ],

      'no-useless-constructor': 'error',
      'no-console': ['warn', { allow: ['error'] }],
      'no-plusplus': ['warn', { allowForLoopAfterthoughts: true }],
      eqeqeq: ['error', 'always', { null: 'ignore' }],
    },
  },

  {
    files: ['bin/**/*.js', 'build.js'],
    languageOptions: {
      globals: {
        console: 'readonly',
        process: 'readonly',
      },
    },
  },

  eslintConfigPrettier,
);
