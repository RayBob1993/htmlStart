// General
const { gulp, src, dest, watch, series, parallel } = require('gulp');
const gulpIf = require('gulp-if');
const clean = require('gulp-clean');
const imagemin = require('gulp-imagemin');
const sourcemaps = require('gulp-sourcemaps');

// Styles
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

// BrowserSync
const browserSync = require('browser-sync');

const config = require('./gulp/config');
const isProd = process.env.NODE_ENV === 'production';

function serverTask (done) {
  browserSync.init(config.server);

  done();
}

function clearTask () {
  return src(config.path.build.dist, {
      read: false
    })
    .pipe(clean({
      force: true
    }));
}

function fontsTask () {
  return src(config.path.dev.fonts)
    .pipe(dest(config.path.build.fonts));
}

function imagesTask () {
  return src(config.path.dev.images)
    .pipe(gulpIf(isProd, imagemin()))
    .pipe(dest(config.path.build.images));
}

function watchTask () {}

function stylesTask (done) {
  return src(config.path.dev.scss)
    .pipe(gulpIf(!isProd, sourcemaps.init()))
    .pipe(
      sass({
        includePaths: ['node_modules']
      })
      .on('error', sass.logError)
    )
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 10 versions'],
      grid: true
    }))
    .pipe(gulpIf(!isProd, sourcemaps.write()))
    .pipe(dest(config.path.build.css))
}

function jsTask () {
  return src(config.path.dev.js)
    .pipe(dest(config.path.build.js))
}

function defaultTask () {
  return parallel();
}

exports.build = series(clearTask, parallel(
  stylesTask,
  jsTask,
  fontsTask,
  imagesTask
));
exports.watch = watchTask;
exports.styles = stylesTask;
exports.images = imagesTask;
exports.fonts = fontsTask;
exports.clear = clearTask;
exports.js = jsTask;
exports.server = serverTask;
exports.default = defaultTask;
