const { watch, series } = require('gulp');
const { htmlTask } = require('./html');
const { imagesTask } = require('./images');
const { stylesTask } = require('./styles');
const { jsTask } = require('./js');
const { reloadBrowser } = require('./server');

const config = require('../gulp.config');

const watchTask = (done) => {
  watch(config.path.dev.js, series(jsTask, reloadBrowser));
  watch(config.path.dev.scss, series(stylesTask, reloadBrowser));
  watch(config.path.dev.html, series(htmlTask, reloadBrowser));
  watch(config.path.dev.images, series(imagesTask, reloadBrowser));

  done();
};

exports.watchTask = watchTask;
