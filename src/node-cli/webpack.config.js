const path = require('path');

const prod = {
    mode: 'production',
    target: 'node',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build/node-cli-prod'),
        filename: 'app.js',
    },
};

const dev = {
    mode: 'development',
    target: 'node',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build/node-cli-dev'),
        filename: 'app.js',
    },
};

module.exports = [prod, dev];
