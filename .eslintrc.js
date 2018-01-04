// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module'
  },
  env: {
    es6: true,
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: ['eslint:recommended'],
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': 0
  }
};

// // https://eslint.org/docs/user-guide/configuring
//
// module.exports = {
//   root: true,
//   parser: 'babel-eslint',
//   parserOptions: {
//     ecmaVersion: 6,
//     sourceType: 'module',
//     ecmaFeatures: {
//       jsx: true
//     }
//   },
//   env: {
//     browser: true,
//   },
//   // https://github.com/standard/standard/blob/master/docs/RULES-en.md
//   extends: 'standard',
//   // required to lint *.vue files
//   plugins: [
//     'html'
//   ],
//   // add your custom rules here
//   rules: {
//     // allow async-await
//     'generator-star-spacing': 'off',
//     // allow debugger during development
//     'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
//     'semi': 'off',
//     'space-before-funtion-paren': 1
//   }
// };
