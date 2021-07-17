const { src, dest } = require('gulp');
const cache = require('gulp-cached');
const remember = require('gulp-remember');
const htmlPartial = require('gulp-html-partial');
const prettier = require('gulp-prettier');

const config = require('../gulp.config');

const htmlTask = () => {
  return src(config.path.html.dev)
    .pipe(htmlPartial(config.partials))
    .pipe(cache(config.cacheNames.html))
    .pipe(prettier(config.prettier))
    .pipe(remember(config.cacheNames.html))
    .pipe(dest(config.path.html.build));
};

exports.htmlTask = htmlTask;
