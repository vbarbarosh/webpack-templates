Templates for Webpack

## `.browserslistrc`

Use `.browserslistrc` to specify supported browsers. `babel-loader` with `@babel/preset-env`, and
`autoprefixer` will consult this file for supported browsers.

    # http://browserl.ist/?q=IE+%3E%3D+10%2C+Edge+%3E%3D+12%2C+Chrome+%3E%3D+50%2C+Firefox+%3E%3D+40%2C+Safari+%3E%3D+7%2C+iOS+%3E%3D+7

    IE >= 10
    Edge >= 12
    Chrome >= 40
    Firefox >= 40
    Safari >= 7
    iOS >= 7
