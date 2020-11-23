const browserSync = require('browser-sync').create();

function server () {
  browserSync.init({
    watch: true,
    server: {
      baseDir: 'src/html'
    },
    notify: false
  });
}

exports.server = server;
