const { src, dest } = require('gulp');
const htmlPartial = require('gulp-html-partial');
const prettier = require('gulp-prettier');

const config = require('../gulp.config');

const htmlTask = () => {
  return src(config.path.html.dev)
    .pipe(htmlPartial(config.partials))
    .pipe(prettier(config.prettier))
    .pipe(dest(config.path.html.build));
};

exports.htmlTask = htmlTask;
