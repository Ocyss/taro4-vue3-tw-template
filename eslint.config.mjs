import antfu from '@antfu/eslint-config'

import taroVariableConfig from 'eslint-config-taro/rules/variables.js'
// import taroVueConfig from 'eslint-config-taro/vue3'
import originalVuePlugin from 'eslint-plugin-vue'
// import originalTaroPlugin from 'eslint-plugin-taro'

const legacyOriginalVuePluginName = 'vue'
const legacyOriginalVuePluginPrefix = `${legacyOriginalVuePluginName}/`
const currentOriginalVuePluginName = 'o-vue'
const currentOriginalVuePluginPrefix = `${currentOriginalVuePluginName}/`

const taroBuiltInRules = {}

Object.keys(taroVariableConfig.rules).forEach((key) => {
  const value = taroVariableConfig.rules[key]
  if (key.startsWith(legacyOriginalVuePluginPrefix)) {
    key = key.replace(legacyOriginalVuePluginPrefix, currentOriginalVuePluginPrefix)
  }
  taroBuiltInRules[key] = value
})

export default antfu(
  {
    rules: {
      'no-console': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      'perfectionist/sort-imports': 'off',
    },
  },
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    plugins: {
      [currentOriginalVuePluginName]: originalVuePlugin,
    },
    settings: {
      [legacyOriginalVuePluginName]: {
        version: 'detect',
      },
    },
    rules: {
      ...taroBuiltInRules,
      'jsx-quotes': 'off',
    },
  },
  {
    files: ['src/app.config.{js,ts}'],
    languageOptions: {
      globals: {
        defineAppConfig: 'readable',
      },
    },
  },
  {
    files: ['src/pages/**/*.config.{js,ts}'],
    languageOptions: {
      globals: {
        definePageConfig: 'readable',
      },
    },
  },

  // override rules
  {
    rules: {
      'curly': ['error', 'all'],
      'no-unused-vars': 'off',
      'style/max-len': [
        'error',
        {
          code: 100,
          ignoreComments: false,
          ignoreTrailingComments: false,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true,
        },
      ],
      'style/brace-style': ['error', '1tbs', { allowSingleLine: false }],
      'style/arrow-parens': ['error', 'always'],
      'style/jsx-quotes': ['error', 'prefer-double'],
      'style/multiline-ternary': ['error', 'always-multiline', { ignoreJSX: true }],
      'style/no-confusing-arrow': ['error'],
      'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
      'import/order': [
        'error',
        {
          'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'type'],
          'pathGroups': [
            { pattern: '@/**', group: 'internal' },
          ],
          'newlines-between': 'always-and-inside-groups',
          'pathGroupsExcludedImportTypes': [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'type',
          ],
        },
      ],
      'ts/no-unused-vars': 'error',
    },
  },
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: {
        tt: 'readonly',
      },
    },
    rules: {
      'node/prefer-global/process': 'off',
    },
  },
  {
    files: ['tsconfig.json'],
    rules: {
      'jsonc/sort-keys': 'off',
    },
  },
  {
    files: ['*.md'],
    rules: {
      'style/max-len': 'off',
    },
  },
)
