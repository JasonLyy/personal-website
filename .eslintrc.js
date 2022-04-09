module.exports = {
  plugins: [
    '@typescript-eslint',
    'prettier',
    'testing-library',
    'eslint-plugin-jest-dom',
  ],
  extends: [
    'next/core-web-vitals',
    'plugin:storybook/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'error',
  },
};
