const { series, parallel } = require('gulp');

const {
  clearTask,
  fontsTask,
  htmlTask,
  imagesTask,
  serverTask,
  stylesTask,
  watchTask,
  jsTask
} = require('./gulp/tasks/index');

exports.default = parallel(
  stylesTask,
  jsTask,
  serverTask,
  watchTask
);

exports.build = series(
  clearTask,
  parallel(
    stylesTask,
    jsTask,
    fontsTask,
    imagesTask,
    htmlTask
  )
);

exports.watch = watchTask;
exports.html = htmlTask;
exports.styles = stylesTask;
exports.images = imagesTask;
exports.fonts = fontsTask;
exports.clear = clearTask;
exports.js = jsTask;
exports.server = serverTask;
