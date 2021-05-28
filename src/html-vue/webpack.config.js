const path = require('path');

const prod = {
    mode: 'production',
    target: 'web',
    entry: '.',
    output: {
        path: path.resolve(__dirname, '../../dist/html-vue-prod'),
        filename: 'bundle.js',
    },
};

const dev = {
    mode: 'development',
    target: 'web',
    entry: '.',
    output: {
        path: path.resolve(__dirname, '../../dist/html-vue-dev'),
        filename: 'bundle.js',
    },
};

module.exports = [prod, dev];
