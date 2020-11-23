const gulpConfig = {
  path: {
    scss: {
      dev: 'src/assets/scss/*.scss',
      build: 'dist/css/',
      lint: 'src/assets/scss/**/*.scss'
    },
    js: {
      dev: 'src/assets/js/**/*.js',
      build: 'dist/js/'
    },
    fonts: {
      dev: 'src/assets/fonts/**/*.{eot,svg,ttf,woff,woff2}',
      build: 'dist/fonts/'
    },
    images: {
      dev: 'src/assets/images/**/*',
      build: 'dist/images/'
    },
    html: {
      dev: 'src/*.html',
      watch: 'src/**/*.html',
      build: 'dist/'
    },
    dist: 'dist/*'
  },
  server: {
    open: true,
    watch: true,
    server: {
      baseDir: 'dist/'
    },
    notify: false
  },
  partials: {
    variablePrefix: '>>',
    basePath: 'src/assets/partials/'
  },
  htmlbeautify: {
    indent_size: 2
  },
  autoprefixer: {
    overrideBrowserslist: ['last 10 versions'],
    grid: true
  }
};

module.exports = gulpConfig;
