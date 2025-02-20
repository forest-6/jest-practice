// https://eslint.org/docs/latest/use/configure/configuration-files
export default [
  {
    plugins: ['@typescript-eslint'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:vue/vue3-recommended',
      'plugin:nuxt/recommended',
      'plugin:prettier/recommended',
      '@nuxtjs/eslint-config-typescript'
    ],
    parserOptions: {
      parser: '@typescript-eslint/parser'
    }
  }
]
