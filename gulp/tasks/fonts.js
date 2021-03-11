const { src, dest } = require('gulp');

const config = require('../gulp.config');

const fontsTask = () => {
  return src(config.path.fonts.dev)
    .pipe(dest(config.path.fonts.build));
};

exports.fontsTask = fontsTask;
