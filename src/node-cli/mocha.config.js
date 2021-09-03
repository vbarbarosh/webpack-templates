// https://github.com/mochajs/mocha/blob/master/example/config/.mocharc.js

const config = {
    spec: ['src/**/*.test.js'],
    require: '@babel/register',
    recursive: true,
};

module.exports = config;
