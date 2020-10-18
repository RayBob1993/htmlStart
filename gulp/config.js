const config = {
  path: {
    dev: {
      scss: 'src/assets/scss/**/*.scss'
    },
    build: {
      css: 'dist/css/'
    }
  },
  server: {
    server: {
      baseDir: './assets/build'
    },
    notify: false
  }
};

module.exports = config;
