const { src, dest } = require('gulp');
const htmlPartial = require('gulp-html-partial');
const htmlbeautify = require('gulp-html-beautify');

const config = require('../gulp.config');

const htmlTask = () => {
  return src(config.path.html.dev)
    .pipe(htmlPartial(config.partials))
    .pipe(htmlbeautify(config.htmlbeautify))
    .pipe(dest(config.path.html.build));
};

exports.htmlTask = htmlTask;
