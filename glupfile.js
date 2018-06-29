'use strict';

const gulp = require('./node_modules/gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const sourceMaps = require('gulp-sourcemaps');
const commentStrip = require('gulp-strip-comments');
const replace = require('gulp-replace');
const autoPrefixer = require('gulp-autoprefixer');

// sass
gulp.task('sass', function () {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass({outputStyle : 'compact'}).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('all', ['sass']);