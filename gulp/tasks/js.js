const { src, dest } = require('gulp');

const config = require('../gulp.config');

const jsTask = () => {
  return src(config.path.dev.js)
    .pipe(dest(config.path.build.js))
};

exports.jsTask = jsTask;
