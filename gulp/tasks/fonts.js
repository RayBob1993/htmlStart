const { src, dest } = require('gulp');

const config = require('../gulp.config');

const fontsTask = () => {
  return src(config.path.dev.fonts)
    .pipe(dest(config.path.build.fonts));
};

exports.fontsTask = fontsTask;
