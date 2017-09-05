var gulp = require('gulp'),
    rollup = require('rollup');
var gulpRollup = require('gulp-rollup');
var options = require('./rollup.config.js');

gulp.task('bundle', function() {
    gulp.src('./src/**/*.js')
        .pipe(gulpRollup(options))
        .pipe(gulp.dest('./src'));
});