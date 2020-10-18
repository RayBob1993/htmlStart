const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const config = require('../config');

function styles () {
  return gulp.src(config.path.dev.scss)
    .pipe(sass())
    .pipe(gulp.dest(config.path.build.css))
}

module.exports = styles;
