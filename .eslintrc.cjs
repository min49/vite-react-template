const config = {
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  plugins: ['simple-import-sort'],
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
    {
      files: ['**/*.ts?(x)'],
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'error',
      },
    },
    {
      files: ['**/*.ts?(x)'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // Packages `react` related packages come first.
              ['^react$', '^react-dom/', '^vite$', '^@?\\w'],
              // Absolute imports and Relative imports.
              ['^@/', '^\\.'],
              // Side effect imports.
              ['^\\u0000'],
              // Style imports.
              ['^.+\\.s?css$'],
            ],
          },
        ],
      },
    },
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
}

module.exports = config
