module.exports = {
  env: {
    browser: true,
    es6: true,
    mocha: true,
  },
  extends: [
    'standard'
  ],
  plugins: [
    'mocha'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'semi': ['error', 'always'],
    'indent': ['error', 2],
    'no-unused-expressions': ['off']
  },
  overrides: [
    {
      files: ['*.js', 'src/*.js']
    }
  ]
};
