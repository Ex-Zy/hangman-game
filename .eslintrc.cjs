/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  plugins: ['no-relative-import-paths'],
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  rules: {
    'no-relative-import-paths/no-relative-import-paths': [
      'error',
      { rootDir: 'src', prefix: '@' }
    ],
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
    ecmaVersion: 'latest'
  }
}
