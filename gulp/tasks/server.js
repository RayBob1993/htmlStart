const browserSync = require('browser-sync');

const config = require('../gulp.config');

const serverTask = (done) => {
  browserSync.init(config.server);

  done();
};

const reloadBrowser = (done) => {
  browserSync.reload();

  done();
};

exports.serverTask = serverTask;
exports.reloadBrowser = reloadBrowser;
