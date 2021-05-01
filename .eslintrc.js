module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'jest', 'prettier'],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'no-nested-ternary': 'off',
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'warn',
      { allowShortCircuit: true, allowTernary: true },
    ],
    'react-hooks/exhaustive-deps': 1,
    'import/no-cycle': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 0,
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 0,
    'no-prototype-builtins': 'off',
    'no-plusplus': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': 0,
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'linebreak-style': 'off',
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        labelComponents: [],
        labelAttributes: [],
        controlComponents: [],
        assert: 'either',
        depth: 25,
      },
    ],
    'jsx-a11y/control-has-associated-label': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
