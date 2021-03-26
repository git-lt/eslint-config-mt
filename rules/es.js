module.exports = {
  plugins: ['babel'],
  rules: {
    'linebreak-style': 'off',
    'func-names': ['error', 'as-needed'],
    'prefer-arrow-callback': 'warn',
    // 不禁止对函数的参数重新赋值
    'no-param-reassign': 'off',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    'consistent-return': 'off',
    'no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'after-used',
        caughtErrors: 'none',
        ignoreRestSiblings: true,
      },
    ],
    'global-require': 'off',
    'max-len': 'off',
    'no-console': [
      'warn',
      {
        allow: ['debug', 'info', 'warn', 'error'],
      },
    ],
    'no-bitwise': [
      'error',
      {
        allow: ['~'],
      },
    ],
    // 允许变量有下划线
    'no-underscore-dangle': 'off',
    'arrow-body-style': 'off',
    'default-case': 'off',
    // 函数也需要多行尾逗号
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    eqeqeq: [
      'warn',
      'always',
      {
        null: 'ignore',
      },
    ],
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: true,
      },
    ],
    'object-curly-newline': [
      'error',
      {
        multiline: true,
        consistent: true,
      },
    ],
    // 强制三元运算符格式
    'multiline-ternary': ['error', 'always-multiline'],
  },
};
