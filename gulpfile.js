const { src, dest } = require('gulp');

exports.default = function() {
  return src('../node_modules/aframe/dist/aframe-v1.3.0.min.js')
    .pipe(dest('./js/'));
}