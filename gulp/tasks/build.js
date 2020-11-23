const { parallel } = require('gulp');

function build () {
  return parallel();
}

exports.build = build;
