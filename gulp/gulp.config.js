const gulpConfig = {
  path: {
    dev: {
      src: 'src/',
      scss: 'src/assets/scss/*.scss',
      js: 'src/assets/js/**/*.js',
      images: 'src/assets/images/**/*',
      fonts: 'src/assets/fonts/**/*.{eot,svg,ttf,woff,woff2}',
      pages: 'src/*.html',
      html: 'src/**/*.html'
    },
    build: {
      dist: 'dist/*',
      css: 'dist/css/',
      js: 'dist/js/',
      images: 'dist/images/',
      fonts: 'dist/fonts/',
      html: 'dist/'
    }
  },
  server: {
    open: true,
    watch: true,
    server: {
      baseDir: 'src/html'
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
