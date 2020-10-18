const { task } = require('gulp');
const { styles, serve, clean, fonts, images, build, watch, js } = require('./gulp/tasks');

task('styles', styles);
task('serve', serve);
task('watch', watch);
task('clean', clean);
task('fonts', fonts);
task('images', images);
task('build', build);
task('js', js);
