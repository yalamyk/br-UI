'use strict';

const gulp = require('./node_modules/gulp');
const autoPrefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const sourceMaps = require('gulp-sourcemaps');
const spriteSmith = require('gulp.spritesmith');
// const px2vw = require('./script/px_2_vw');
const gulpSync = require('gulp-sync')(gulp);
const commentStrip = require('gulp-strip-comments');
const cleanCSS = require('gulp-clean-css');
const replace = require('gulp-replace');

// sass
gulp.task('sass', function () {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass({outputStyle : 'compact'}).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
});
// image sprite
gulp.task('sprite', function () {
    let spriteData = gulp.src('./img/*.png', {read: false})
        .pipe(spriteSmith({
            retinaSrcFilter: ['./img/*_2x.png'],
            imgName: '1x.png',
            retinaImgName: '2x.png',
            padding: 4,
            cssName: 'sprite.scss',
            // cssTemplate: './src/scss/template/scss.handlebars',
            imgPath: '../img/1x.png',
            retinaImgPath: '../img/2x.png'
            //engine: phantomSmithJS
        }));
    spriteData.img.pipe(gulp.dest('./dist/img'));
    spriteData.css.pipe(gulp.dest('./dist/scss'));

    return spriteData;
});
gulp.task('all', ['sass','sprite']);