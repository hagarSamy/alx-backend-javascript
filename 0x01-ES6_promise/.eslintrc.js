import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import airbnb from 'eslint-config-airbnb-base';
import jestPlugin from 'eslint-plugin-jest';

const compat = new FlatCompat({
  baseDirectory: new URL('.', import.meta.url).pathname,
  resolvePluginsRelativeTo: new URL('.', import.meta.url).pathname,
});

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: {
      jest: jestPlugin,
    },
    rules: {
      'no-console': 'off',
      'no-shadow': 'off',
      'no-restricted-syntax': [
        'error',
        {
          selector: 'LabeledStatement',
          message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
        },
        {
          selector: 'WithStatement',
          message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
        },
      ],
      'import/no-mutable-exports': 'off', // Disable the problematic rule
    },
  },
  ...compat.extends('airbnb-base', 'plugin:jest/all'),
  {
    files: ['**/*.test.js'],
    plugins: {
      jest: jestPlugin,
    },
    rules: jestPlugin.configs.recommended.rules,
  },
];
