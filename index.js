import { fixupPluginRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import eslintImport from 'eslint-plugin-import'
import eslintPerfectionist from 'eslint-plugin-perfectionist'
import eslintPreferLet from 'eslint-plugin-prefer-let'
import eslintPromise from 'eslint-plugin-promise'

let compat = new FlatCompat({
  baseDirectory: import.meta.dirname
})

let standard = compat.extends('eslint-config-standard')

export default [
  ...standard,
  {
    languageOptions: {
      sourceType: 'module'
    },
    plugins: {
      'import': eslintImport,
      'perfectionist': eslintPerfectionist,
      'prefer-let': fixupPluginRules(eslintPreferLet),
      'promise': eslintPromise
    },
    rules: {
      ...eslintPerfectionist.configs['recommended-alphabetical'].rules,
      'array-bracket-newline': 'off',
      'array-bracket-spacing': 'off',
      'array-element-newline': 'off',
      'arrow-parens': 'off',
      'arrow-spacing': 'off',
      'block-scoped-var': 'error',
      'block-spacing': 'off',
      'brace-style': 'off',
      'comma-dangle': 'off',
      'comma-spacing': 'off',
      'comma-style': 'off',
      'computed-property-spacing': 'off',
      'dot-location': 'off',
      'eol-last': 'off',
      'for-direction': 'error',
      'func-call-spacing': 'off',
      'func-name-matching': 'error',
      'function-call-argument-newline': 'off',
      'function-paren-newline': 'off',
      'generator-star-spacing': 'off',
      'implicit-arrow-linebreak': 'off',
      'indent': 'off',
      'jsx-quotes': 'off',
      'key-spacing': 'off',
      'keyword-spacing': 'off',
      'linebreak-style': 'off',
      'lines-around-comment': 'off',
      'lines-between-class-members': 'off',
      'max-len': 'off',
      'max-statements-per-line': 'off',
      'multiline-ternary': 'off',
      'new-parens': 'off',
      'newline-per-chained-call': 'off',
      'no-confusing-arrow': 'off',
      'no-console': 'error',
      'no-dupe-else-if': 'error',
      'no-extra-parens': 'off',
      'no-extra-semi': 'off',
      'no-floating-decimal': 'off',
      'no-invalid-this': 'error',
      'no-lonely-if': 'error',
      'no-misleading-character-class': 'error',
      'no-mixed-operators': 'off',
      'no-mixed-spaces-and-tabs': 'off',
      'no-multi-spaces': 'off',
      'no-multiple-empty-lines': 'off',
      'no-nested-ternary': 'error',
      'no-shadow': 'error',
      'no-tabs': 'off',
      'no-trailing-spaces': 'off',
      'no-unsafe-optional-chaining': 'error',
      'no-useless-return': 'error',
      'no-whitespace-before-property': 'off',
      'nonblock-statement-body-position': 'off',
      'object-curly-newline': 'off',
      'object-curly-spacing': 'off',
      'object-property-newline': 'off',
      'one-var-declaration-per-line': 'off',
      'operator-linebreak': 'off',
      'padded-blocks': 'off',
      'padding-line-between-statements': 'off',
      'perfectionist/sort-imports': [
        'error',
        {
          'groups': [
            'side-effect',
            ['side-effect-style', 'style'],
            ['builtin-type', 'type', 'builtin', 'external', 'unknown'],
            [
              'internal-type',
              'parent-type',
              'sibling-type',
              'index-type',
              'internal',
              'parent',
              'sibling',
              'index'
            ],
            ['object']
          ],
          'newlines-between': 'always',
          'order': 'asc',
          'type': 'alphabetical'
        }
      ],
      'prefer-const': 'off',
      'prefer-let/prefer-let': 'error',
      'prefer-rest-params': 'error',
      'quote-props': 'off',
      'quotes': 'off',
      'rest-spread-spacing': 'off',
      'semi': 'off',
      'semi-spacing': 'off',
      'semi-style': 'off',
      'space-before-blocks': 'off',
      'space-before-function-paren': 'off',
      'space-in-parens': 'off',
      'space-infix-ops': 'off',
      'space-unary-ops': 'off',
      'spaced-comment': 'off',
      'switch-colon-spacing': 'off',
      'template-curly-spacing': 'off',
      'template-tag-spacing': 'off',
      'wrap-iife': 'off',
      'wrap-regex': 'off',
      'yield-star-spacing': 'off',
    }
  },
  {
    files: ['**/*.test.{js,jsx}', '**/*.test.{ts,tsx}'],
    rules: {
      'no-unused-expressions': 'off'
    }
  }
]
