const { src, dest } = require('gulp');
const uglify = require('gulp-uglify');
const gulpIf = require('gulp-if');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const cache = require('gulp-cached');
const remember = require('gulp-remember');

const config = require('../gulp.config');
const { isProd, isDev } = require('../utils/index');

const jsTask = () => {
  return src(config.path.js.dev)
    .pipe(cache(config.cacheNames.js))
    .pipe(remember(config.cacheNames.js))
    // .pipe(gulpIf(isDev, sourcemaps.init()))
    // .pipe(gulpIf(isProd, concat(config.fileNames.js.build)))
    // .pipe(gulpIf(isProd, uglify()))
    // .pipe(gulpIf(isDev, sourcemaps.write()))
    .pipe(dest(config.path.js.build))
};

exports.jsTask = jsTask;
