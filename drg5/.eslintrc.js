module.exports = {
  plugins: ['react', 'react-hooks'],
  rules: {
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
  },
  root: true,
  extends: ['eslint-config-firesoon/typescript-react'],
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
  },
};
