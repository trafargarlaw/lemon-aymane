module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'prettier'],
  rules: {
    // keep until replace dummy data with real data
    'react/prop-types': 'off',
  },
}
