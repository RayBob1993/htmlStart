const cache = require('gulp-cached');
const remember = require('gulp-remember');
const { watch, series } = require('gulp');

const { htmlTask } = require('./html');
const { imagesTask } = require('./images');
const { stylesTask } = require('./styles');
const { fontsTask } = require('./fonts');
const { jsTask } = require('./js');
const { reloadBrowser } = require('./server');

const config = require('../gulp.config');

function onUnlinkWatch (path, cacheName) {
  if (path && cacheName) {
    delete cache.caches[cacheName][path];

    remember.forget(cacheName, path);
  }
}

const watchTask = (done) => {
  const watcherJS = watch(config.path.js.watch, series(jsTask, reloadBrowser));
  const watcherSCSS = watch(config.path.scss.watch, series(stylesTask, reloadBrowser));
  const watcherHTML = watch(config.path.html.watch, series(htmlTask, reloadBrowser));
  const watcherImages = watch(config.path.images.watch, series(imagesTask, reloadBrowser));
  const watcherFonts = watch(config.path.fonts.watch, series(fontsTask, reloadBrowser));

  watcherSCSS.on('unlink', path => onUnlinkWatch(path, config.cacheNames.scss));

  watcherHTML.on('unlink', path => onUnlinkWatch(path, config.cacheNames.html));

  watcherJS.on('unlink', path => onUnlinkWatch(path, config.cacheNames.js));

  watcherImages.on('unlink', path => onUnlinkWatch(path, config.cacheNames.images));

  watcherFonts.on('unlink', path => onUnlinkWatch(path, config.cacheNames.fonts));

  done();
};

exports.watchTask = watchTask;
