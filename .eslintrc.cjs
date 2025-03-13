// eslintrc.cjs
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    // parser: '@typescript-eslint/parser',
  },
  extends: [
    // 'plugin:@typescript-eslint/recommended',
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended',
  ],
  // plugins: ['@typescript-eslint'],
  rules: {
    // You can add custom rules here
    'vue/multi-word-component-names': 'off',
  },
};