const { watch, series } = require('gulp');
const { htmlTask } = require('./html');
const { imagesTask } = require('./images');
const { stylesTask } = require('./styles');
const { jsTask } = require('./js');
const { reloadBrowser } = require('./server');

const config = require('../gulp.config');

const watchTask = (done) => {
  watch(config.path.js.dev, series(jsTask, reloadBrowser));
  watch(config.path.scss.dev, series(stylesTask, reloadBrowser));
  watch(config.path.html.dev, series(htmlTask, reloadBrowser));
  watch(config.path.images.dev, series(imagesTask, reloadBrowser));

  done();
};

exports.watchTask = watchTask;
