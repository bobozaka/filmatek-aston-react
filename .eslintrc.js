module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'plugin:react-hooks/recommended',
    'plagin:react/recommended',
    'plagin:prettier/recommended',
    'prettier',
    'prettier/react',
    'plagin:import/warnings',
    'plagin:import/errors',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],

  rules: {
    'no-console': 'warn',
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
    'react/jsx-no-useless-fragment': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      },
    ],
  },
};
