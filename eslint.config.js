import eslintConfig from '@delement/eslint-config-master'
import js from '@eslint/js'
import prettierConfig from 'eslint-config-prettier'
import prettier from 'eslint-plugin-prettier'

export default [
  ...eslintConfig,

  {
    ignores: ['dist', 'node_modules'],
  },

  js.configs.recommended,

  {
    plugins: {
      prettier,
    },
    rules: {
      ...prettierConfig.rules,
      'prettier/prettier': 'error',
    },
  },
  {
    settings: {
      react: {
        version: '18.0',
      },
    },
    rules: {
      'no-console': [
        'error',
        { allow: ['warn', 'error', 'debug', 'log', 'table', 'time', 'timeEnd'] },
      ],
    },
  },
]
