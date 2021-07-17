const { src, dest } = require('gulp');
const imagemin = require('gulp-imagemin');
const gulpIf = require('gulp-if');
const cache = require('gulp-cached');
const remember = require('gulp-remember');

const { gifsicle, mozjpeg, optipng, svgo } = imagemin;
const { isProd } = require('../utils/index');
const config = require('../gulp.config');

const imagesTask = () => {
  const imageminOptions = [
    gifsicle({
      interlaced: true
    }),
    mozjpeg({
      progressive: true
    }),
    optipng({
      optimizationLevel: 5
    }),
    svgo({
      plugins: [
        {
          removeViewBox: false,
          collapseGroups: true
        }
      ]
    })
  ];

  return src(config.path.images.dev)
    .pipe(cache(config.cacheNames.images))
    .pipe(remember(config.cacheNames.images))
    .pipe(gulpIf(isProd, imagemin(imageminOptions)))
    .pipe(dest(config.path.images.build));
};

exports.imagesTask = imagesTask;
