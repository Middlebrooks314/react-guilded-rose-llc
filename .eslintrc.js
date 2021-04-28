module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: 1

  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'error',
    'no-unused-vars': 'off',
    quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }]
  }
}
