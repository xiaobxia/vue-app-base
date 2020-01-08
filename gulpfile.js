const gulp = require('gulp');
const replace = require('gulp-replace');
const gulpif = require('gulp-if');
const srcFiles = [
  './src/**'
];
gulp.task('pxtorpx', function(done){
  gulp.src(srcFiles)
    .pipe(gulpif(true, replace(/['"](\d+)rpx['"]|\b(\d+)rpx\b/g, function(pixel) {
      if ( /'|"/.test(pixel) || '0px'=== pixel || '1px' === pixel) {
        return pixel;
      }
      return ( parseInt(pixel)) + 'px';
    })))
    .pipe(gulp.dest('./src'));
  done();
});
gulp.task('default', ['pxtorpx']);

