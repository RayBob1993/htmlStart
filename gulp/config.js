const config = {
  path: {
    dev: {
      scss: 'src/assets/scss/*.scss',
      js: 'src/js/**/*',
      images: 'src/assets/images/**/*',
      fonts: 'src/assets/fonts/**/*'
    },
    build: {
      dist: 'dist/*',
      css: 'dist/css/',
      js: 'dist/js/',
      images: 'dist/images/',
      fonts: 'dist/fonts/'
    }
  },
  server: {
    open: true,
    watch: true,
    server: {
      baseDir: 'src/html'
    },
    notify: false
  }
};

module.exports = config;
