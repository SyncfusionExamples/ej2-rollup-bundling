# EJ2 Rollup Bundling Demo

In this repository, we have configured [Rollup](https://rollupjs.org/) bundling for [Essential JS 2](https://www.syncfusion.com/products/essential-js2) application.

## Configuring Rollup JS.

We have added rollup configuration file named `rollup.config.js`. We can use this file to customize the configuration.

```
var resolve = require('rollup-plugin-node-resolve');
var commonjs = require('rollup-plugin-commonjs');
var uglify = require('rollup-plugin-uglify');

module.exports = {
    allowRealFiles: true,
    entry: ['./src/app.js', './src/page1/app.js', './src/page2/app.js'],
    format: 'iife',
    plugins: [
        resolve({ jsnext: true, module: true }),
        commonjs({
            include: 'node_modules/**'
        }),
        uglify({
            compress: {
                dead_code: true
            }
        })
    ],
    onwarn: function(warning, next) {
        return;
    }
};
```


## Installing and Running Application

### Installing Package 

`npm install` or `npm i`

### Running Application

`npm start`
