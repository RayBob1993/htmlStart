const { src, dest } = require('gulp');
const sass = require('gulp-sass');
const gulpIf = require('gulp-if');
const cache = require('gulp-cached');
const remember = require('gulp-remember');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');
const stylelint = require('gulp-stylelint');

const config = require('../gulp.config');
const { isDev } = require('../utils/index');

const stylesTask = () => {
  const postcssPlugins = [
    autoprefixer(config.autoprefixer),
    cssnano()
  ];

  return src(config.path.scss.dev)
    .pipe(cache(config.cacheNames.scss))
    .pipe(remember(config.cacheNames.scss))
    .pipe(gulpIf(isDev, sourcemaps.init()))
    .pipe(
      sass({
        includePaths: ['node_modules']
      })
        .on('error', sass.logError)
    )
    .pipe(postcss(postcssPlugins))
    .pipe(gulpIf(isDev, sourcemaps.write()))
    .pipe(rename(config.fileNames.css.buildMin))
    .pipe(dest(config.path.scss.build))
};

const stylesLintTask = () => {
  return src(config.path.scss.lint)
    .pipe(stylelint({
      fix: true
    }))
    .pipe(dest('dist/'))
};

exports.stylesTask = stylesTask;
exports.stylesLintTask = stylesLintTask;
