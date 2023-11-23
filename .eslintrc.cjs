const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

const extensions = [
  '@vercel/style-guide/eslint/node',
  '@vercel/style-guide/eslint/typescript',
  '@vercel/style-guide/eslint/browser',
  '@vercel/style-guide/eslint/react',
  '@vercel/style-guide/eslint/next',
].map((ext) => require.resolve(ext));

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: extensions,
  parserOptions: {
    project,
  },
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ['node_modules/'],
  rules: {
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-misused-promises': [
      'off',
      {
        checksVoidReturn: { attributes: false },
      },
    ],
    'import/no-default-export': 'off',
  },
  overrides: [
    {
      files: '**/actions.ts',
      rules: {
        '@typescript-eslint/require-await': 'off',
      },
    },
  ],
};
