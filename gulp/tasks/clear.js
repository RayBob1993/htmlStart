const { src } = require('gulp');
const clear = require('gulp-clean');

const config = require('../gulp.config');

const clearTask = () => {
  return src(config.path.dist, {
      read: false
    })
    .pipe(clear({
      force: true
    }));
};

exports.clearTask = clearTask;
