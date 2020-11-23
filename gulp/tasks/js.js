const { src, dest } = require('gulp');

const config = require('../gulp.config');

const jsTask = () => {
  return src(config.path.js.dev)
    .pipe(dest(config.path.js.build))
};

exports.jsTask = jsTask;
