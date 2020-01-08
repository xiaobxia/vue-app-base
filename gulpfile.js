const gulp = require('gulp');
const replace = require('gulp-replace');
const gulpif = require('gulp-if');
const srcFiles = [
  './src/**'
];
gulp.task('pxtorpx', function(done){
  gulp.src(srcFiles)
    .pipe(gulpif(true, replace(/['"](\d+)px['"]|\b(\d+)px\b/g, function(pixel) {
      if ( /'|"/.test(pixel) || '0px'=== pixel || '1px' === pixel) {
        return pixel;
      }
      return ( parseInt(pixel)) + 'rpx';
    })))
    .pipe(gulp.dest('./src'));
  done();
});
gulp.task('default', ['pxtorpx']);

