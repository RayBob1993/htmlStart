const { clearTask } = require('./clear');
const { fontsTask } = require('./fonts');
const { htmlTask } = require('./html');
const { imagesTask } = require('./images');
const { serverTask } = require('./server');
const { stylesTask, stylesLintTask } = require('./styles');
const { watchTask } = require('./watch');
const { jsTask } = require('./js');

exports.watchTask = watchTask;
exports.htmlTask = htmlTask;
exports.stylesTask = stylesTask;
exports.stylesLintTask = stylesLintTask;
exports.imagesTask = imagesTask;
exports.fontsTask = fontsTask;
exports.clearTask = clearTask;
exports.jsTask = jsTask;
exports.serverTask = serverTask;
