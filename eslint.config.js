import eslintConfig from '@delement/eslint-config-master'
import js from '@eslint/js'
import prettierConfig from 'eslint-config-prettier'

export default [
  ...eslintConfig,

  {
    ignores: ['dist', 'node_modules'],
  },

  js.configs.recommended,

  {
    settings: {
      react: {
        version: '18.0',
      },
    },
    rules: {
      ...prettierConfig.rules,
    },
  },
  {
    rules: {
      'no-console': ['error', { allow: ['warn', 'error'] }],
    },
  },
]
