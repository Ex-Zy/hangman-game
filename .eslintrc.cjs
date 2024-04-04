/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  plugins: ['no-relative-import-paths', 'simple-import-sort', 'vuejs-accessibility'],
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier/skip-formatting',
    'plugin:vue-scoped-css/vue3-recommended',
    "plugin:vuejs-accessibility/recommended",
  ],
  rules: {
    'no-relative-import-paths/no-relative-import-paths': ['error', { rootDir: 'src', prefix: '@' }],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    '@typescript-eslint/no-import-type-side-effects': 'error',
    'vue/block-order': [
      'error',
      {
        order: ['script', 'template', 'style']
      }
    ]
  },
  overrides: [
    {
      files: ['vitest.config.ts'],
      rules: {
        'no-relative-import-paths/no-relative-import-paths': 'off'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    project: ['./tsconfig.app.json', './tsconfig.vitest.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
    parser: '@typescript-eslint/parser'
  },
  parser: 'vue-eslint-parser',
  ignorePatterns: ['.eslintrc.cjs']
}
