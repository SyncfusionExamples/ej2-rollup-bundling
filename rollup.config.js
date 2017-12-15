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
        {
            transform(code, id) {
                return code.replace(/\/\*\* @class \*\//g, "\/*@__PURE__*\/");
            }
        },
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
