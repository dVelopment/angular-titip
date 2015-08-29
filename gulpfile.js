"use strict";

var gulp = require('gulp'),
    Server = require('karma').Server,
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

gulp.task('test', function(done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});

gulp.task('compile', function() {
    return gulp.src('./src/directive.js')
        .pipe(rename('angular-titip.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['compile'], function() {
    return gulp.src('dist/angular-titip.js')
        .pipe(uglify())
        .pipe(rename('angular-titip.min.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['build']);
