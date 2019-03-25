module.exports = {
    extends: 'react-app',
    plugins: [
        'prettier'
    ],
    parser: 'babel-eslint',
    settings: {
        react: {
            createClass: 'createReactClass',
            pragma: 'React',
            version: '16.6.3',
            flowVersion: '0.53'
        }
    },
    root: true,
    env: {
        'node': true,
        'browser': true
    },
    rules: {
        "prettier/prettier": "error",
        'arrow-parens': 0, // allow paren-less arrow functions
        'generator-star-spacing': 0, // allow async-await
        'no-unused-vars': 'error', // disabled no ununsed var  `V1.1`
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', // no use debugger in production
        'indent': [2, 4, { SwitchCase: 1 }], // 4 space for tab for perttier
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'never',
                named: 'never',
                asyncArrow: 'always'
            }
        ] // no space in function name for perttier
    }
}