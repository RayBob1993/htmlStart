const { src, dest } = require('gulp');
const cache = require('gulp-cached');
const remember = require('gulp-remember');

const config = require('../gulp.config');

const fontsTask = () => {
  return src(config.path.fonts.dev)
    .pipe(cache(config.cacheNames.fonts))
    .pipe(remember(config.cacheNames.fonts))
    .pipe(dest(config.path.fonts.build));
};

exports.fontsTask = fontsTask;
