const { src, dest } = require('gulp');
const htmlPartial = require('gulp-html-partial');
const htmlbeautify = require('gulp-html-beautify');

const config = require('../gulp.config');

const htmlTask = () => {
  return src(config.path.dev.pages)
    .pipe(htmlPartial(config.partials))
    .pipe(htmlbeautify(config.htmlbeautify))
    .pipe(dest(config.path.build.html));
};

exports.htmlTask = htmlTask;
