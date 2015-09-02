"use strict";

var gulp = require('gulp'),
    Server = require('karma').Server,
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    rename = require('gulp-rename');

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

gulp.task('examples', ['compile'], function () {
    var b = browserify({
        entries: './examples/commonjs/app.js',
        debug: false
    });

    return b.bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(rename('app.bundle.js'))
        .pipe(gulp.dest('./examples/commonjs'));
});

gulp.task('build', ['examples'], function() {
    return gulp.src('dist/angular-titip.js')
        .pipe(uglify())
        .pipe(rename('angular-titip.min.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['build']);
