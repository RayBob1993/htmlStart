const { watch, series } = require('gulp');
const { htmlTask } = require('./html');
const { imagesTask } = require('./images');
const { stylesTask } = require('./styles');
const { fontsTask } = require('./fonts');
const { jsTask } = require('./js');
const { reloadBrowser } = require('./server');

const config = require('../gulp.config');

const watchTask = (done) => {
  watch(config.path.js.watch, series(jsTask, reloadBrowser));
  watch(config.path.scss.watch, series(stylesTask, reloadBrowser));
  watch(config.path.html.watch, series(htmlTask, reloadBrowser));
  watch(config.path.images.watch, series(imagesTask, reloadBrowser));
  watch(config.path.fonts.watch, series(fontsTask, reloadBrowser));


  done();
};

exports.watchTask = watchTask;
